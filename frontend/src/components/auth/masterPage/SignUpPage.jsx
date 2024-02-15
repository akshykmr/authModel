/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { forwardRef, useState, useEffect, useRef } from "react";
import {
  image1,
  image2,
  oval1,
  oval2,
  image3,
  image4,
  image5,
  googleIcon,
  facebookIcon,
  mailIcon,
  appleIcon,
  globeIcon,
  cQuestionIcon,
  image6,
  mail,
  lock,
  removeEye,
  E_RemoveIcon,
} from "../../../assets";

const SignUpPage = forwardRef(
  (
    {
      handleOnChange,
      handleClick,
      isOtpVerified,
      passwordPreview,
      openOtpDialogBox,
      authData,
      formErrors,
      handleOtpChange,
      handleLocalClick,
      pageState,
      isOtpFilled,
      isLoading,
      error,
      isStrongPassword,
    },
    ref
  ) => {
    console.log(isLoading, "isloaing");

    const otpRefs = useRef([]);
    useEffect(() => {
      otpRefs.current = otpRefs.current.slice(0, 6); // Limit to  6 input fields
    }, []);

    const handleKeyPress = (e, index) => {
      // Prevent non-numeric input
      if (!/[0-9]/.test(e.key) || e.target.value.length >= 1) {
        e.preventDefault();
        return;
      }

      // Move focus to the next input field if the current input is not empty
      if (e.key.match(/[0-9]/) && e.target.value === "") {
        otpRefs.current[index + 1]?.focus();
      }
    };

    const [isInputFocused, setIsInputFocused] = useState(false);

    const handleFocus = (inputType) => {
      setIsInputFocused(inputType);
    };

    const handleBlur = (inputType) => {
      setIsInputFocused(inputType);
    };

    return (
      <div className="absolute w-[100vw] h-[100vh] top-0 left-0 bg-white shadow-[0px_3px_6px_#120f281f]">
        {/* /---------------------HEADER START -----------------/ */}
        <div className=" header w-full h-16 flex items-center justify-between px-4 bg-white shadow-md ">
          <div className="left_logo w-[50%] h-full flex items-center gap-[20px] pl-[50px]">
            <img className=" w-[32px] h-[32px]" alt="Image" src={image6} />
            <span
              onClick={(e) => handleLocalClick("reload")}
              className="logo [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#171a1f] text-[20px] tracking-[0] leading-[30px] whitespace-nowrap cursor-pointer"
            >
              Logo
            </span>{" "}
          </div>
          <div className="right_icon w-[50%] h-full flex items-center justify-end pr-[50px] gap-[20px]">
            <img
              onClick={(e) => handleLocalClick("redirect_to_languageChange")}
              className=" w-[20px] h-[20px] cursor-pointer"
              alt="Globe"
              src={globeIcon}
            />

            <img
              onClick={(e) => handleLocalClick("redirected_to_questions")}
              className=" w-[20px] h-[20px] cursor-pointer"
              alt="C question"
              src={cQuestionIcon}
            />
          </div>
        </div>
        {/* /---------------------HEADER END ----------------/ */}

        {/* /---------------------BODY START ------------------/ */}
        <div className="body  relative w-[100vw] h-[calc(100vh-64px)] flex flex-row">
          {/* /---------------------LEFT SIDE START ----------------/ */}
          <div className="  left w-[50%] h-[100%]  flex items-center p-[20px] justify-center">
            <div className="w-[439px] h-[409px]  rounded-[4px] absolute bg-white ">
              <div className="relative w-[431px] h-[396px] top-[6px] left-[4px]">
                <div className="absolute w-[223px] h-[257px] top-[51px] left-[190px] rounded-[24px] border-[3px] border-solid border-[#d9cbf6]" />
                <div className="absolute w-[149px] h-[116px] top-[99px] left-[17px] rounded-[24px] border-[3px] border-solid border-[#d9cbf6]" />
                <img
                  className="absolute w-[89px] h-[89px] top-0 left-[342px]"
                  alt="Image"
                  src={image1}
                />
                <img
                  className="absolute w-[60px] h-[60px] top-[69px] left-0"
                  alt="Image"
                  src={image2}
                />
                <img
                  className="absolute w-[30px] h-[30px] top-[361px] left-[335px]"
                  alt="Oval"
                  src={oval1}
                />
                <img
                  className="absolute w-[16px] h-[16px] top-[25px] left-[111px]"
                  alt="Oval"
                  src={oval2}
                />
                <img
                  className="absolute w-[324px] h-[375px] top-[22px] left-[41px]"
                  alt="Image"
                  src={image3}
                />
                <img
                  className="absolute w-[80px] h-[80px] top-[250px] left-px"
                  alt="Image"
                  src={image4}
                />
                <img
                  className="absolute w-[59px] h-[50px] top-[119px] left-[312px]"
                  alt="Image"
                  src={image5}
                />
              </div>
            </div>
          </div>
          {/* /---------------------LEFT SIDE END ----------------/ */}

          {/* /---------------------RIGHT SIDE  START ----------------/ */}
          <div className=" right w-[50%] h-[100%]  flex items-center p-[20px] justify-center ">
            <div className="w-[519px] h-[540px]  rounded-[8px] shadow-[0px_2px_5px_#171a1f17,0px_0px_2px_#171a1f1f] absolute bg-white flex flex-col items-center justify-center">
              <div className="heading  pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex items-center justify-center  ">
                <div
                  className={`innerHeader  flex flex-col ${
                    pageState === "initialPage" ? "w-[404px]" : "w-[451px]"
                  }`}
                >
                  <div
                    className={` [font-family='Epilogue-Bold',Helvetica] font-bold text-[#171a1f] text-[32px] tracking-[0] leading-[48px] whitespace-nowrap`}
                  >
                    {pageState === "open_email_login"
                      ? "  Welcome back 👋"
                      : "Let&#39;s Get Started 🚀".replace(/&#39;/g, "'")}
                  </div>
                  <div
                    className={` [font-family:'Epilogue-Regular',Helvetica] font-normal text-[#9095a0] text-[20px] tracking-[0] leading-[30px] whitespace-nowrap`}
                  >
                    {pageState === "open_email_login"
                      ? "Login to your account"
                      : "Sign up your account"}
                  </div>
                </div>
              </div>

              {pageState === "open_email_signUp" ||
              pageState === "open_email_login" ? (
                // /---------------------EMAIL/PASS INPUT START ----------------

                <div className="inputTags flex flex-col p-[20px] items-center justify-center gap-[20px]  ">
                  <div className="input1 flex flex-col gap-[10px]">
                    <div
                      className={` relative w-[451px] h-[43px]  bg-gray-100 rounded-[8px] ${
                        isInputFocused === "email"
                          ? "outline outline-[#00bdd633]"
                          : ""
                      } `}
                    >
                      <input
                        type="email"
                        name="email"
                        value={authData.email}
                        onChange={(e) => handleOnChange(e)}
                        placeholder="What is your e-mail?"
                        onFocus={() => handleFocus("email")}
                        onBlur={() => handleBlur("email")}
                        className="focus:outline-none absolute w-[80%] h-[100%] left-[44px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#bcc1ca] text-[16px] tracking-[0] leading-[26px] whitespace-nowrap bg-[#f3f4f6]"
                      />

                      <img
                        className="top-[12px] left-[16px] absolute w-[20px] h-[20px]"
                        alt="Mail"
                        src={mail}
                      />
                      {
                        // authData.password && isStrongPassword(authData.password) &&
                      }
                    </div>

                    <p className=" w-[451px] self-start text-left [font-family:'Inter-Regular',Helvetica] font-normal text-[#117b34] text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">
                      Great job! Your password is strong.
                    </p>
                  </div>
                  {((pageState === "open_email_signUp" && isOtpVerified) ||
                    pageState === "open_email_login") && (
                    <div className="input2 flex flex-col gap-[10px]">
                      <div
                        className={` w-[451px] h-[43px]  bg-gray-100 relative rounded-[8px] ${
                          isInputFocused === "pass"
                            ? (authData.password &&
                              !isStrongPassword(authData.password)) ? "outline outline-[#de3b4033]"
                            : "outline outline-[#00bdd633] " : ""
                        } relative `}
                      >
                        <input
                          type={passwordPreview ? "text" : "password"}
                          name="password"
                          value={authData.password}
                          onChange={(e) => handleOnChange(e)}
                          onFocus={() => handleFocus("pass")}
                          onBlur={() => handleBlur("pass")}
                          placeholder="Enter your password"
                          className={`${(authData.password &&
                            !isStrongPassword(authData.password)) ? "ring-[1px] rounded-[8px] ring-[#de3b40]" : " "}  pl-[44px]  w-[451px]  focus:outline-none absolute h-[100%] [font-family:'Inter-Regular',Helvetica] font-normal text-[#bcc1ca] text-[16px] tracking-[0] leading-[26px] whitespace-nowrap bg-[#f3f4f6]`}
                        />
                        <img
                          className="top-[12px] left-[16px] absolute w-[20px] h-[20px]"
                          alt="Lock"
                          src={lock}
                        />
                        <img
                          onClick={() => handleClick("togglePreviewPass")}
                          className="absolute w-[20px] h-[20px] top-[12px] left-[416px] cursor-pointer"
                          alt="Remove red eye"
                          src={removeEye}
                        />
                      </div>
                      {authData.password &&
                        !isStrongPassword(authData.password) && (
                          <>
                          <div className=" w-[150px] h-[4px] bg-[#c12126] rounded-[2px]" />
                          <p className="w-[451px] self-start text-left [font-family:'Inter-Regular',Helvetica] font-normal text-transparent text-[14px] tracking-[0] leading-[22px]">
                            <span className="font-bold text-[#c12126]">
                              Your password is weak.
                            </span>
                            <span className="[font-family:'Inter-Regular',Helvetica] text-[#9095a0]">
                              {" "}
                              Please choose a password that is at least{" "}
                            </span>
                            <span className="[font-family:'Inter-Regular',Helvetica] text-[#171a1f]">
                              8 characters long (letters, numbers, and symbols)
                            </span>
                            <span className="[font-family:'Inter-Regular',Helvetica] text-[#9095a0]">
                              {" "}
                              to make it more secure.
                            </span>
                          </p>
                          </>
                        )}
                      {authData.password &&
                        isStrongPassword(authData.password) && (
                          <>
                          <div className=" w-[452px] h-[4px] bg-[#117b34] rounded-[2px]" />
                          <p className="w-[451px] self-start text-left [font-family:'Inter-Regular',Helvetica] font-normal text-[#117b34] text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">
                            Great job! Your password is strong.
                          </p>
                          </>
                        )}
                    </div>
                  )}
                  <div className="submitBtn">
                    <button
                      className={`box-border w-[452px] h-[44px]   bg-[#00bdd6] rounded-[8px] overflow-hidden cursor-pointer flex  items-center justify-center ${
                        isOtpVerified || pageState === "open_email_login"
                          ? "top-[292px]"
                          : "top-[220px]"
                      }`}
                      onClick={
                        pageState === "open_email_login"
                          ? (e) => handleClick("login")
                          : pageState === "open_email_signUp" && isOtpVerified
                          ? (e) => handleClick("CreateMyAccount")
                          : (e) => handleClick("sendOtp")
                      }
                    >
                      <div className="absolute [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[26px] whitespace-nowrap">
                        {!isOtpVerified || pageState === "open_email_login"
                          ? "Continue"
                          : "Create my account"}
                      </div>
                    </button>
                  </div>
                </div>
              ) : (
                //---------------------EMAIL/PASS INPUT END ----------------

                //--------------------- LOGIN'S BUTTONS ON HOMEPAGE START ----------------
                <div className="loginButtons flex flex-col p-[20px] items-center justify-center gap-[15px]">
                  <button
                    className="all-[unset] box-border w-[404px] h-[44px]  bg-[#00bdd6] relative rounded-[8px] overflow-hidden cursor-pointer "
                    onClick={(e) => handleLocalClick("open_email_signUp")}
                  >
                    <div className="left-[145px] text-white absolute top-[8px] [font-family:'Inter-Regular',Helvetica] font-normal text-[16px] tracking-[0] leading-[26px] whitespace-nowrap">
                      Sign Up with Email
                    </div>
                    <img
                      className="top-[12px] left-[119px] absolute w-[20px] h-[20px]"
                      alt="Mail"
                      src={mailIcon}
                    />
                  </button>
                  <button
                    className="all-[unset] box-border relative w-[404px] h-[44px]  bg-white rounded-[8px] overflow-hidden border border-solid border-[#db4437] cursor-pointer"
                    onClick={(e) => handleClick("signUp_with_google")}
                  >
                    <div className="left-[139px] text-[#db4437] absolute top-[8px] [font-family:'Inter-Regular',Helvetica] font-normal text-[16px] tracking-[0] leading-[26px] whitespace-nowrap">
                      Sign up with Google
                    </div>
                    <img
                      className="left-[113px] absolute w-[20px] h-[20px] top-[12px]"
                      alt="Google"
                      src={googleIcon}
                    />
                  </button>
                  <button
                    className="all-[unset] box-border relative w-[404px] h-[44px]  bg-white rounded-[8px] overflow-hidden border border-solid border-[#4267b2] cursor-pointer "
                    onClick={(e) => handleClick("signUp_with_facebook")}
                  >
                    <div className="left-[129px] text-[#4267b2] absolute top-[8px] [font-family:'Inter-Regular',Helvetica] font-normal text-[16px] tracking-[0] leading-[26px] whitespace-nowrap">
                      Sign up with Facebook
                    </div>
                    <img
                      className="absolute w-[20px] h-[20px] top-[12px] left-[103px]"
                      alt="Logo fb simple"
                      src={facebookIcon}
                    />
                  </button>

                  <button
                    className="all-[unset] box-border w-[404px] h-[44px]  bg-white border border-solid border-[#171a1f] relative rounded-[8px] overflow-hidden cursor-pointer"
                    onClick={(e) => handleClick("signUp_with_apple")}
                  >
                    <div className="left-[144px] text-[#171a1f] absolute top-[8px] [font-family:'Inter-Regular',Helvetica] font-normal text-[16px] tracking-[0] leading-[26px] whitespace-nowrap">
                      Sign up with Apple
                    </div>
                    <img
                      className="left-[118px] absolute w-[20px] h-[20px] top-[12px]"
                      alt="Apple"
                      src={appleIcon}
                    />
                  </button>
                </div>
                //  /--------------------- LOGIN'S BUTTONS ON HOMEPAGE END ----------------/
              )}

              {/* /--------------------- FOOTER LINK START ---------------- */}
              <div className="footerLinks1 h-[20%] flex flex-col p-[20px] items-center justify-center gap-[15px] ">
                <p className="w-[404px]  relative [font-family:'Inter-Regular',Helvetica] font-normal text-transparent text-[14px] text-center tracking-[0] leading-[22px] ">
                  <span className="text-[#9095a0]">
                    By continuing you agree to our
                    <br />
                  </span>
                  <span
                    className="[font-family:'Rubik-Medium',Helvetica] font-medium text-[#323842] cursor-pointer"
                    onClick={(e) =>
                      handleLocalClick("redirect_to_terms&condition")
                    }
                  >
                    Terms &amp; Conditions
                  </span>
                  <span className="text-[#323842]">&nbsp;</span>
                  <span className="text-[#9095a0]">and </span>
                  <span
                    className="[font-family:'Rubik-Medium',Helvetica] font-medium text-[#323842] cursor-pointer"
                    onClick={(e) =>
                      handleLocalClick("redirect_to_privacyPolicy")
                    }
                  >
                    Privacy Policy
                  </span>
                </p>
              </div>
              <div className="footerLinks2 h-[10%] flex items-center justify-center ">
                <div className="pageToggler  top-[501px] flex flex-row gap-2 w-[452px] justify-center ">
                  <div className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[14px] text-right tracking-[0] leading-[22px] whitespace-nowrap">
                    {pageState === "open_email_login"
                      ? "Don't have an account?"
                      : "Already have an account?"}
                  </div>
                  <div
                    className="[font-family:'Inter-Bold',Helvetica] font-bold text-[#00bdd6] text-[14px] tracking-[0] leading-[22px] whitespace-nowrap cursor-pointer"
                    onClick={
                      pageState === "open_email_login"
                        ? (e) => handleLocalClick("open_email_signUp")
                        : (e) => handleLocalClick("open_email_login")
                    }
                  >
                    {pageState === "open_email_login" ? "Sing up" : "Log in"}
                  </div>
                </div>
              </div>

              {/* /--------------------- FOOTER LINK END ---------------- */}
            </div>
            {openOtpDialogBox && (
              <>
                <div className="absolute w-[100vw] h-[100vh] top-0 left-0 bg-[#171a1f66] flex flex-row  justify-center  items-center">
                  <div className="w-[548px] h-[434px]  rounded-[8px] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f] absolute bg-white">
                    <img
                      onClick={(e) => handleClick("closeDialogBox")}
                      className="absolute w-[24px] h-[24px] top-[24px] left-[500px] cursor-pointer"
                      alt="E remove"
                      src={E_RemoveIcon}
                    />
                    <p className="absolute top-[103px] left-[121px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#323842] text-[14px] text-center tracking-[0] leading-[22px] whitespace-nowrap">
                      Please type the code we sent you in your email
                    </p>
                    <div className="absolute top-[47px] left-[180px] [font-family:'Epilogue-Regular',Helvetica] font-normal text-[#171a1f] text-[32px] text-center tracking-[0] leading-[48px] whitespace-nowrap">
                      Almost done
                    </div>

                    <input
                      name="0"
                      value={authData.otp[0] || ""}
                      onChange={handleOtpChange}
                      type="text"
                      onKeyPress={(e) => handleKeyPress(e, 0)}
                      ref={(el) => (otpRefs.current[0] = el)}
                      className={`w-[48px] h-[48px] top-[158px] left-[90px] rounded-[4px] border border-solid ${
                        error && error.errorOn === "otp"
                          ? "border-[#C12126]"
                          : "border-[#9095A0]"
                      }  shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f] absolute bg-white [font-family:'Inter-Bold',Helvetica] font-bold text-[#171a1f] text-[24px] text-center tracking-[0] leading-[36px] whitespace-nowrap`}
                    />

                    <input
                      type="text"
                      name="01"
                      value={authData.otp[1] || ""}
                      onChange={handleOtpChange}
                      onKeyPress={(e) => handleKeyPress(e, 1)}
                      ref={(el) => (otpRefs.current[1] = el)}
                      className={`w-[48px] h-[48px] top-[158px] left-[154px] rounded-[4px] border border-solid ${
                        error && error.errorOn === "otp"
                          ? "border-[#C12126]"
                          : "border-[#9095A0]"
                      }  shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f] absolute bg-white [font-family:'Inter-Bold',Helvetica] font-bold text-[#171a1f] text-[24px] text-center tracking-[0] leading-[36px] whitespace-nowrap`}
                    />
                    <input
                      type="text"
                      name="2"
                      value={authData.otp[2] || ""}
                      onChange={handleOtpChange}
                      onKeyPress={(e) => handleKeyPress(e, 2)}
                      ref={(el) => (otpRefs.current[2] = el)}
                      className={`w-[48px] h-[48px] top-[158px] left-[218px] rounded-[4px] border border-solid ${
                        error && error.errorOn === "otp"
                          ? "border-[#C12126]"
                          : "border-[#9095A0]"
                      }  shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f] absolute bg-white [font-family:'Inter-Bold',Helvetica] font-bold text-[#171a1f] text-[24px] text-center tracking-[0] leading-[36px] whitespace-nowrap`}
                    />
                    <input
                      type="text"
                      name="3"
                      value={authData.otp[3] || ""}
                      onChange={handleOtpChange}
                      onKeyPress={(e) => handleKeyPress(e, 3)}
                      ref={(el) => (otpRefs.current[3] = el)}
                      className={`w-[48px] h-[48px] top-[158px] left-[282px] rounded-[4px] border border-solid ${
                        error && error.errorOn === "otp"
                          ? "border-[#C12126]"
                          : "border-[#9095A0]"
                      }  shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f] absolute bg-white [font-family:'Inter-Bold',Helvetica] font-bold text-[#171a1f] text-[24px] text-center tracking-[0] leading-[36px] whitespace-nowrap`}
                    />

                    <input
                      type="text"
                      name="4"
                      value={authData.otp[4] || ""}
                      onChange={handleOtpChange}
                      onKeyPress={(e) => handleKeyPress(e, 4)}
                      ref={(el) => (otpRefs.current[4] = el)}
                      className={`w-[48px] h-[48px] top-[158px] left-[346px] rounded-[4px] border border-solid ${
                        error && error.errorOn === "otp"
                          ? "border-[#C12126]"
                          : "border-[#9095A0]"
                      }  shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f] absolute bg-white [font-family:'Inter-Bold',Helvetica] font-bold text-[#171a1f] text-[24px] text-center tracking-[0] leading-[36px] whitespace-nowrap`}
                    />
                    <input
                      type="text"
                      name="5"
                      value={authData.otp[5] || ""}
                      onChange={handleOtpChange}
                      onKeyPress={(e) => handleKeyPress(e, 5)}
                      ref={(el) => (otpRefs.current[5] = el)}
                      className={`w-[48px] h-[48px] top-[158px] left-[410px] rounded-[4px] border border-solid ${
                        error && error.errorOn === "otp"
                          ? "border-[#C12126]"
                          : "border-[#9095A0]"
                      }  shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f] absolute bg-white [font-family:'Inter-Bold',Helvetica] font-bold text-[#171a1f] text-[24px] text-center tracking-[0] leading-[36px] whitespace-nowrap`}
                    />

                    {error && error.errorOn === "otp" && (
                      <p className="absolute top-[213px] left-[194px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#c12126] text-[14px] text-center tracking-[0] leading-[22px] whitespace-nowrap">
                        Please enter a valid code
                      </p>
                    )}
                    {/* <div className="top-[327px] left-[256px] absolute [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[14px] text-center tracking-[0] leading-[22px] whitespace-nowrap">
                  51:12
                </div> */}
                    <button
                      className={`all-[unset] box-border w-[368px] h-[52px] top-[252px] left-[90px] ${
                        isOtpFilled && !isLoading
                          ? "bg-[#00BDD6]"
                          : isOtpFilled && isLoading
                          ? "bg-[#d3f9e0]"
                          : "bg-[#9095a0]"
                      } absolute rounded-[8px] overflow-hidden cursor-pointer`}
                      onClick={(e) => handleClick("verifyOtp")}
                    >
                      <div
                        className={`left-[159px] ${
                          isLoading ? "text-[#117B34]" : "text-white"
                        } absolute top-[11px] [font-family:'Inter-Regular',Helvetica] font-normal text-[18px] tracking-[0] leading-[28px] whitespace-nowrap `}
                      >
                        Verify
                      </div>
                    </button>
                    <p className="absolute top-[379px] left-[128px] [font-family:'Inter-Regular',Helvetica] font-normal text-transparent text-[14px] text-center tracking-[0] leading-[22px] whitespace-nowrap">
                      <span className="text-[#171a1f]">
                        Can&#39;t access to your email?{" "}
                      </span>
                      <span className="[font-family:'Rubik-Medium',Helvetica] font-medium text-[#323842] cursor-pointer">
                        Contact support
                      </span>
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
          {/* /---------------------RIGHT SIDE END ----------------/ */}
        </div>
        {/* /---------------------BODY END ----------------*/}

        {/* /---------------------DIALOG BOX FOR OTP  START ----------------*/}

        {openOtpDialogBox && (
          <>
            <div className="absolute w-[100vw] h-[100vh] top-0 left-0 bg-[#171a1f66] flex flex-row  justify-center  items-center">
              <div className="w-[548px] h-[434px]  rounded-[8px] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f] absolute bg-white">
                <img
                  onClick={(e) => handleClick("closeDialogBox")}
                  className="absolute w-[24px] h-[24px] top-[24px] left-[500px] cursor-pointer"
                  alt="E remove"
                  src={E_RemoveIcon}
                />
                <p className="absolute top-[103px] left-[121px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#323842] text-[14px] text-center tracking-[0] leading-[22px] whitespace-nowrap">
                  Please type the code we sent you in your email
                </p>
                <div className="absolute top-[47px] left-[180px] [font-family:'Epilogue-Regular',Helvetica] font-normal text-[#171a1f] text-[32px] text-center tracking-[0] leading-[48px] whitespace-nowrap">
                  Almost done
                </div>

                <input
                  name="0"
                  value={authData.otp[0] || ""}
                  onChange={handleOtpChange}
                  type="text"
                  onKeyPress={(e) => handleKeyPress(e, 0)}
                  ref={(el) => (otpRefs.current[0] = el)}
                  className={`w-[48px] h-[48px] top-[158px] left-[90px] rounded-[4px] border border-solid ${
                    error && error.errorOn === "otp"
                      ? "border-[#C12126]"
                      : "border-[#9095A0]"
                  }  shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f] absolute bg-white [font-family:'Inter-Bold',Helvetica] font-bold text-[#171a1f] text-[24px] text-center tracking-[0] leading-[36px] whitespace-nowrap`}
                />

                <input
                  type="text"
                  name="01"
                  value={authData.otp[1] || ""}
                  onChange={handleOtpChange}
                  onKeyPress={(e) => handleKeyPress(e, 1)}
                  ref={(el) => (otpRefs.current[1] = el)}
                  className={`w-[48px] h-[48px] top-[158px] left-[154px] rounded-[4px] border border-solid ${
                    error && error.errorOn === "otp"
                      ? "border-[#C12126]"
                      : "border-[#9095A0]"
                  }  shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f] absolute bg-white [font-family:'Inter-Bold',Helvetica] font-bold text-[#171a1f] text-[24px] text-center tracking-[0] leading-[36px] whitespace-nowrap`}
                />
                <input
                  type="text"
                  name="2"
                  value={authData.otp[2] || ""}
                  onChange={handleOtpChange}
                  onKeyPress={(e) => handleKeyPress(e, 2)}
                  ref={(el) => (otpRefs.current[2] = el)}
                  className={`w-[48px] h-[48px] top-[158px] left-[218px] rounded-[4px] border border-solid ${
                    error && error.errorOn === "otp"
                      ? "border-[#C12126]"
                      : "border-[#9095A0]"
                  }  shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f] absolute bg-white [font-family:'Inter-Bold',Helvetica] font-bold text-[#171a1f] text-[24px] text-center tracking-[0] leading-[36px] whitespace-nowrap`}
                />
                <input
                  type="text"
                  name="3"
                  value={authData.otp[3] || ""}
                  onChange={handleOtpChange}
                  onKeyPress={(e) => handleKeyPress(e, 3)}
                  ref={(el) => (otpRefs.current[3] = el)}
                  className={`w-[48px] h-[48px] top-[158px] left-[282px] rounded-[4px] border border-solid ${
                    error && error.errorOn === "otp"
                      ? "border-[#C12126]"
                      : "border-[#9095A0]"
                  }  shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f] absolute bg-white [font-family:'Inter-Bold',Helvetica] font-bold text-[#171a1f] text-[24px] text-center tracking-[0] leading-[36px] whitespace-nowrap`}
                />

                <input
                  type="text"
                  name="4"
                  value={authData.otp[4] || ""}
                  onChange={handleOtpChange}
                  onKeyPress={(e) => handleKeyPress(e, 4)}
                  ref={(el) => (otpRefs.current[4] = el)}
                  className={`w-[48px] h-[48px] top-[158px] left-[346px] rounded-[4px] border border-solid ${
                    error && error.errorOn === "otp"
                      ? "border-[#C12126]"
                      : "border-[#9095A0]"
                  }  shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f] absolute bg-white [font-family:'Inter-Bold',Helvetica] font-bold text-[#171a1f] text-[24px] text-center tracking-[0] leading-[36px] whitespace-nowrap`}
                />
                <input
                  type="text"
                  name="5"
                  value={authData.otp[5] || ""}
                  onChange={handleOtpChange}
                  onKeyPress={(e) => handleKeyPress(e, 5)}
                  ref={(el) => (otpRefs.current[5] = el)}
                  className={`w-[48px] h-[48px] top-[158px] left-[410px] rounded-[4px] border border-solid ${
                    error && error.errorOn === "otp"
                      ? "border-[#C12126]"
                      : "border-[#9095A0]"
                  }  shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f] absolute bg-white [font-family:'Inter-Bold',Helvetica] font-bold text-[#171a1f] text-[24px] text-center tracking-[0] leading-[36px] whitespace-nowrap`}
                />

                {error && error.errorOn === "otp" && (
                  <p className="absolute top-[213px] left-[194px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#c12126] text-[14px] text-center tracking-[0] leading-[22px] whitespace-nowrap">
                    Please enter a valid code
                  </p>
                )}
                {/* <div className="top-[327px] left-[256px] absolute [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[14px] text-center tracking-[0] leading-[22px] whitespace-nowrap">
                  51:12
                </div> */}
                <button
                  className={`all-[unset] box-border w-[368px] h-[52px] top-[252px] left-[90px] ${
                    isOtpFilled && !isLoading
                      ? "bg-[#00BDD6]"
                      : isOtpFilled && isLoading
                      ? "bg-[#d3f9e0]"
                      : "bg-[#9095a0]"
                  } absolute rounded-[8px] overflow-hidden cursor-pointer`}
                  onClick={(e) => handleClick("verifyOtp")}
                >
                  <div
                    className={`left-[159px] ${
                      isLoading ? "text-[#117B34]" : "text-white"
                    } absolute top-[11px] [font-family:'Inter-Regular',Helvetica] font-normal text-[18px] tracking-[0] leading-[28px] whitespace-nowrap `}
                  >
                    Verify
                  </div>
                </button>
                <p className="absolute top-[379px] left-[128px] [font-family:'Inter-Regular',Helvetica] font-normal text-transparent text-[14px] text-center tracking-[0] leading-[22px] whitespace-nowrap">
                  <span className="text-[#171a1f]">
                    Can&#39;t access to your email?{" "}
                  </span>
                  <span className="[font-family:'Rubik-Medium',Helvetica] font-medium text-[#323842] cursor-pointer">
                    Contact support
                  </span>
                </p>
              </div>
            </div>
          </>
        )}

        {/* /---------------------DIALOG BOX FOR OTP END ----------------*/}
      </div>
    );
  }
);

export default SignUpPage;
