import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { LoginPage } from "../Page";
import { SignUpPage } from "../masterPage";
import { authRoute } from "../../../routes";
import { StatusCodes } from 'http-status-codes';

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

  console.log(authData, "==");

  const handleClick = async (actionType) => {
    const actions = {
      signUp_with_google: () =>
        window.open(`${BASE_URL}/auth/login/google`, "_self"),
      signUp_with_facebook: () =>
        window.open(`${BASE_URL}/auth/login/facebook`, "_self"),
      sendOtp: async () => {
        if (!authData.email) {
          toast.warn("Email Required!");
          return;
        }
        await authRoute.signUp({ email: authData.email })
        .then(response => {
          console.log(response);
          toast.success(`${response.data.message}, : ${response.data.otp}`);
          setOpenDialogBox(true);
          // setIsOtpVerified(true);
        })
        .catch(error => {
          // Handle error response
          if (error.response) {
           
            const { status, data } = error.response;
            if (status === StatusCodes.NOT_FOUND) {
              // If the status code is  404, the password is required
              toast.error("Password is required.");
            } else {
              // For other status codes, display the error message from the server
              toast.error(data.error || "An error occurred.");
            }
          } else if (error.request) {
            // The request was made but no response was received
            toast.error("No response from server.");
          } else {
            // Something happened in setting up the request that triggered an Error
            toast.error("Error setting up the request.");
          }
          console.log(error);
        });

        // const response = await fetch(`${BASE_URL}/auth/generateOtp`, {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({ email: authData.email }),
        // });
        // const data = await response.json();
        // if (data.success !== true) {
        //   toast.error(data.message);
        //   return;
        // }
        // console.log(data);
        // toast.success(data.message);
        // setOpenDialogBox(true);
        // setIsOtpVerified(true);
      },
      verifyOtp: async () => {
        if (authData.otp.length !== 6) {
          toast.warn("Enter Full Otp");
          return;
        }
        const response = await fetch(`${BASE_URL}/auth/verifyOtp`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: authData.email, otp: authData.otp }),
        });
        const data = await response.json();
        if (data.success !== true) {
          toast.error(data.message);
          return;
        }
        console.log(data);
        toast.success(data.message);
        setOpenDialogBox(false);
        setIsOtpVerified(true);
      },
      CreateMyAccount: () => {},
      closeDialogBox: () => setOpenDialogBox(false),
      togglePreviewPass: () => setPasswordPreview(!passwordPreview),
      // Add more actions here as needed
    };

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
      />
    </>
  );
};

export default Login;
