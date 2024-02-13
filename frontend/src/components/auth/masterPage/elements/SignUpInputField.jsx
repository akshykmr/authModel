import React from 'react'

const SignUpInputField = () => {
  return (
    <div className="container-2">
          <div className="text-wrapper-12">Let&#39;s Get Started 🚀</div>
          <div className="text-wrapper-13">Sign up your account</div>
          <button className="div-wrapper">
            <div className="text-wrapper-14">Continue</div>
          </button>
          <div className="textbox">
            <div className="text-wrapper-15">What is your e-mail?</div>
            <img className="img-3" alt="Mail" src="mail-3.svg" />
          </div>
          <div className="textbox-2">
            <div className="text-wrapper-15">Enter your password</div>
            <img className="img-3" alt="Lock" src="lock-2.svg" />
            <img className="remove-red-eye" alt="Remove red eye" src="remove-red-eye-3.svg" />
          </div>
          <p className="p">
            <span className="span">
              By continuing you agree to our
              <br />
            </span>
            <span className="text-wrapper-9">Terms &amp; Conditions</span>
            <span className="text-wrapper-10">&nbsp;</span>
            <span className="span">and </span>
            <span className="text-wrapper-9">Privacy Policy</span>
          </p>
          <div className="text-wrapper-3">Log in</div>
          <div className="text-wrapper-4">Already have an account?</div>
        </div>
  )
}

export default SignUpInputField
