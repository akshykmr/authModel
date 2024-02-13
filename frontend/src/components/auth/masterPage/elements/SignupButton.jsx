import React from 'react'
import './css/SignUpButton.css';
import {
    googleIcon,
    facebookIcon, 
    mailIcon,
    appleIcon,
  } from '../../../../assets'

const SignUpButton = ({handleLocalClick,handleClick}) => {
  return (
    <div className="container-2">
        <div className="let-s-get-started">Let&#39;s Get Started 🚀</div>
        <div className="text-wrapper">Sign up your account</div>
        <div onClick={(e)=>handleLocalClick("open_email_login")} className="text-wrapper-2">Log in</div>
        <div className="text-wrapper-3">Already have an account?</div>
        <button onClick={(e)=>handleClick("signUp_with_google")} className="button">
          <div className="text-wrapper-4">Sign up with Google</div>
          <img className="google" alt="Google" src={googleIcon}/>
        </button>
        <button onClick={(e)=>handleClick("signUp_with_facebook")} className="button-2">
          <div className="text-wrapper-5">Sign up with Facebook</div>
          <img className="logo-fb-simple" alt="Logo fb simple" src={facebookIcon} />
        </button>
        <button onClick={(e)=>handleLocalClick("open_email_signUp")} className="button-3">
          <div className="text-wrapper-6">Sign Up with Email</div>
          <img className="mail" alt="Mail" src={mailIcon} />
        </button>
        <button onClick={(e)=>handleClick("signUp_with_apple")}  className="button-4">
          <div className="text-wrapper-7">Sign up with Apple</div>
          <img className="apple" alt="Apple" src={appleIcon} />
        </button>
        <p className="by-continuing-you">
          <span className="span">
            By continuing you agree to our
            <br />
          </span>
          <span onClick={(e)=>handleLocalClick("redirect_to_terms&condition")} className="text-wrapper-8">Terms &amp; Conditions</span>
          <span className="text-wrapper-9">&nbsp;</span>
          <span className="span">and </span>
          <span onClick={(e)=>handleLocalClick("redirect_to_privacyPolicy")}  className="text-wrapper-8">Privacy Policy</span>
        </p>
      </div>
  )
}

export default SignUpButton
