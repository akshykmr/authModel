import React, { useState, useRef } from "react";
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
  const [openOtpDialogBox, setOpenDialogBox] = useState(false);
  const [passwordPreview, setPasswordPreview] = useState(false);

  const [pageState, setPageState] = useState("initialPage");

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
  const handleLocalClick = (actionType) => {
    setPageState(actionType);
  };

  console.log(authData, "==");

  const registrationWithOtp = async (credentials) => {
    // if (!credentials.email) {
    //   toast.warn("Email Required!");
    //   return;
    // }
    // if (credentials.action  && !credentials.password ) {
    //   toast.warn("Password Required");
    //   return;
    // }
    // setIsOtpVerified(true);

          setOpenDialogBox(true);


    // await authRoute
    //   .signUp(credentials)
    //   .then((response) => {
    //     console.log(response);
    //     if (response.data.action === "otpGenerated") {
    //       toast.success(`${response.data.message}, : ${response.data.otp}`);
    //       setOpenDialogBox(true);
    //       return;
    //     }
    //     if (response.data.action === "createPassword") {
    //       toast.warn(response.data.message);
    //       setIsOtpVerified(true);
    //       return;
    //     }
    //     toast.success(response.data.message);
    //     setIsOtpVerified(true);
    //   })
    //   .catch((error) => {
    //     if (error.response) {
    //       const { status, data } = error.response;
    //       if (
    //         status === StatusCodes.CONFLICT &&
    //         data.details &&
    //         data.details.action === "alreadyExists"
    //       ) {
    //         setPageState("open_email_login");
    //         toast.warn(data.error);
    //         console.log(data);
    //       }
    //     } else {
    //       toast.error("An error occurred.");
    //     }
    //     console.log(error);
    //   });
  };

  const verifyOtp = async (authData) => {
    if (authData.otp.length !== 6) {
      toast.warn("Enter Full Otp");
      return;
    }
    await authRoute
      .verifyOtp(authData)
      .then((response) => {
        console.log(response);
        toast.success(response.data.message);
        setIsOtpVerified(true);
        setOpenDialogBox(false);
      })
      .catch((error) => {
        if (error.response) {
          const { data } = error.response;
          if (data.details.action === "frontendError") {
            setPageState("open_email_signUp");
          }
          toast.error(data.error);
          console.log(data);
        } else {
          toast.error("An error occurred.");
        }
        console.log(error);
      });
  };

  const login = async (credentials) => {
    if (!credentials.userId) {
      toast.warn("Email Required!");
      return;
    }
    if (!credentials.password) {
      toast.warn("Password Required!");
      return;
    }
    // if (credentials.action  && !credentials.password ) {
    //   toast.warn("Password Required");
    //   return;
    // }
    await authRoute
      .login(credentials)
      .then((response) => {
        console.log(response);
       
        toast.success(response.data.message);
        setIsOtpVerified(true);
        navigate("/home")
      })
      .catch((error) => {
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
      registrationWithOtp({ email: authData.email });
    },
    verifyOtp: () => {
      verifyOtp({ email: authData.email, otp: authData.otp });
    },
    CreateMyAccount: () => {
      registrationWithOtp({
        email: authData.email,
        password: authData.password,
      });
    },
    login: () => {
      login({
        userId: authData.email,
        password: authData.password,
      })
    },
    closeDialogBox: () => setOpenDialogBox(false),
    togglePreviewPass: () => setPasswordPreview(!passwordPreview),
    // Add more actions here as needed
  };

  // ...

  const handleClick = async (actionType) => {
alert(actionType)
    const action = actions[actionType];
    if (action) {
      action();
    }
  };

  // localhost:5000/auth/login/google

  // if (!authData.email) {
  //   toast.warn("UserId Required!");
  //   return; // Return early if email is not provided
  // } else if (!authData.password) {
  //   toast.warn("Password Required!");
  //   return; // Return early if password is not provided
  // }
  // ref.current.continuousStart();
  // e.preventDefault();

  // try {
  //   const response = await fetch(`${BASE_URL}/auth/login`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },

  //     body: JSON.stringify(authData),
  //   });
  //   const data = await response.json();
  //   console.log(data, "data");
  //   if (data.success !== true) {
  //     toast.error(data.message);
  //     ref.current.complete();
  //     return;
  //   }
  //   toast.success(data.message);
  //   localStorage.setItem("token", data.token);
  //   ref.current.complete();
  //   navigate("/home");
  // }
  // catch (error) {
  //   toast.error("Login Failed");
  //   console.error("Error during Login:", error);
  //   ref.current.complete();
  // }
  // };

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
      {/* <LoginPage
        handleOnChange={handleOnChange}
        handleClick={handleClick}
        ref={ref}
      /> */}
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
      />
    </>
  );
};

export default Login;
