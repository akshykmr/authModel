import React, { useState, useRef, useEffect,setTimeout } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { LoginPage } from "../Page";
import { SignUpPage } from "../masterPage";
import { authRoute } from "../../../routes";
import { StatusCodes } from "http-status-codes";

const Login = () => {
  const ref = useRef(null);
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();

  const [authData, setAuthData] = useState({
    email: "",
    password: "",
    otp: "",
  });

  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [isOtpFilled, setIsOtpFilled] = useState(false);
  const [openOtpDialogBox, setOpenDialogBox] = useState(false);
  const [passwordPreview, setPasswordPreview] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [pageState, setPageState] = useState("initialPage");

  const [error, setError] = useState({})

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setAuthData({
      ...authData,
      [name]: value,
    });
  };

  const handleOtpChange = (e) => {
    const inputValue = e.target.value;
    const inputIndex = parseInt(e.target.name, 10);
    const otpArray = authData.otp.split("");
    otpArray[inputIndex] = inputValue;
    setAuthData({
      ...authData,
      otp: otpArray.join(""),
    });
  };

  useEffect(() => {
    if (authData.otp && authData.otp.length === 6) {
      setIsOtpFilled(true);
    } else setIsOtpFilled(false);
    setError({})
  }, [authData.otp]);

  const handleLocalClick = (actionType) => {
    setPageState(actionType);
  };

  console.log(authData, "==", isOtpFilled);

  const isStrongPassword = (password) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const validateForm = (credentials) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValid = true;

    if (!credentials.email) {
      toast.warn("Email is required!");
      isValid = false;
    } else if (!emailRegex.test(credentials.email)) {
      toast.warn("Invalid email format!");
      isValid = false;
    }

    if ((credentials.password || credentials.password === "") && (isOtpVerified || pageState === 'open_email_signUp' )) {
      if (!credentials.password) {
        toast.warn("Password is required!");
        isValid = false;
      } else if (!isStrongPassword(credentials.password)) {
        toast.warn("Invalid password format!");
        isValid = false;
      }
    }

    if (credentials.otp || credentials.otp === "") {
      if (!credentials.otp) {
        toast.warn("OTP required!");
        isValid = false;
      } else if (credentials.otp.length !== 6) {
        toast.warn("Enter Full OTP!");
        isValid = false;
      }
    }

    return isValid;
  };

  const registrationWithOtp = async (credentials) => {
    setIsLoading(true);
    await authRoute
      .signUp(credentials)
      .then((response) => {
        console.log(response);
        if (response.data.action === "otpGenerated") {
          toast.success(`${response.data.message}, : ${response.data.otp}`);
          setOpenDialogBox(true);
    setIsLoading(false);

          return;
        }
        if (response.data.action === "createPassword") {
          toast.warn(response.data.message);
    setIsLoading(false);
    setIsOtpVerified(true);
          return;

        }
        toast.success(response.data.message);
        setIsOtpVerified(true);
    setIsLoading(false);

      })
      .catch((error) => {
    setIsLoading(false);

        if (error.response) {
          const { status, data } = error.response;
          if (
            status === StatusCodes.CONFLICT &&
            data.details &&
            data.details.action === "alreadyExists"
          ) {
            setPageState("open_email_login");
            toast.warn(data.error);
            console.log(data);
          }
        } else {
          toast.error("An error occurred.");
        }
        console.log(error);
      });
  };

  const verifyOtp = async (authData) => {
    setIsLoading(true);
    await authRoute
      .verifyOtp(authData)
      .then((response) => {
        console.log(response);
        toast.success(response.data.message);
        setIsOtpVerified(true);
        setOpenDialogBox(false);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error.response) {
          setIsLoading(false);

          const { data } = error.response;
          if (data.details.action === "frontendError") {
            setPageState("open_email_signUp");
          }
          toast.error(data.error);
          setError({
            errorOn : "otp",
            message : data.error
          })
          console.log(data);
        } else {
          toast.error("An error occurred.");
        }
        console.log(error);
      });
  };

  const login = async (credentials) => {
    setIsLoading(true);
    await authRoute
      .login(credentials)
      .then((response) => {
        console.log(response);

        toast.success(response.data.message);
        setIsOtpVerified(true);
        setIsLoading(false);

        navigate("/home");
      })
      .catch((error) => {
        setIsLoading(false);

        if (error.response) {
          const { status, data } = error.response;
          if (
            status === StatusCodes.CONFLICT &&
            data.details &&
            data.details.action === "alreadyExists"
          ) {
            setPageState("open_email_login");
            toast.warn(data.error);
            console.log(data);
          }
        } else {
          toast.error("An error occurred.");
        }
        console.log(error);
      });
  };

  const actions = {
    signUp_with_google: () => {
      window.open(`${BASE_URL}/auth/login/google`, "_self");
    },
    signUp_with_facebook: () => {
      window.open(`${BASE_URL}/auth/login/facebook`, "_self");
    },
    sendOtp: () => {
      const isFormValid = validateForm({ email: authData.email });
      if (isFormValid) {
        registrationWithOtp({ email: authData.email });
      }
    },
    verifyOtp: () => {
      const isFormValid = validateForm({
        email: authData.email,
        otp: authData.otp,
      });
      if (isFormValid) {
        verifyOtp({ email: authData.email, otp: authData.otp });
      }
    },
    CreateMyAccount: () => {
      const isFormValid = validateForm({
        email: authData.email,
        password: authData.password,
      });
      if (isFormValid) {
        registrationWithOtp({
          email: authData.email,
          password: authData.password,
        });
      }
    },
    login: () => {
      const isFormValid = validateForm({
        email: authData.email,
        password: authData.password,
      });
      if (isFormValid) {
        login({
          userId: authData.email,
          password: authData.password,
        });
      }
    },
    closeDialogBox: () => {setOpenDialogBox(false);
      setAuthData((preData)=>({
        ...preData,
         otp:""
      }))},
    togglePreviewPass: () => setPasswordPreview(!passwordPreview),
  };

  const handleClick = async (actionType) => {
    // alert(actionType)
    const action = actions[actionType];
    if (action) {
      action();
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <SignUpPage
        handleOnChange={handleOnChange}
        handleClick={handleClick}
        ref={ref}
        isOtpVerified={isOtpVerified}
        passwordPreview={passwordPreview}
        openOtpDialogBox={openOtpDialogBox}
        authData={authData}
        handleOtpChange={handleOtpChange}
        handleLocalClick={handleLocalClick}
        pageState={pageState}
        isOtpFilled={isOtpFilled}
        isLoading={isLoading}
        error={error}
      />
    </>
  );
};

export default Login;
