import React, { useState, forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterPage.css";
import LoadingBar from "react-top-loading-bar";
import { MdOutlineAirplaneTicket } from "react-icons/md";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const RegisterPage = forwardRef(
  ({ handleChange, handleRegister, isPassStrong }, ref) => {
    const navigate = useNavigate();

    const [showPass, setPassShow] = useState(false);

    return (
      <div className="containerr">
        <LoadingBar color="#f11946" ref={ref} />
        <form className="form_containerr">
          <MdOutlineAirplaneTicket className="logo_container" />
          <div className="title_containerr">
            <p className="title">Create Your Account</p>
          </div>
          {/* <div className="input_containerr">
            <label className="input_labelr" htmlFor="name_field">
              Name
            </label>
            <input
              required
              placeholder="John Smith"
              title="Input title"
              name="name"
              type="text"
              className="input_fieldr"
              id="name_field"
              onChange={handleChange}
            />
          </div> */}
          <div className="input_containerr">
            <label className="input_labelr" htmlFor="mobile_field">
              Mobile Number
            </label>
            <input
              required
              placeholder="+91 881029988"
              title="Input title"
              name="phone"
              type="text"
              className="input_fieldr"
              id="mobile_field"
              onChange={handleChange}
              onKeyPress={(event) =>
                /[0-9]/.test(event.key) && event.target.value.length < 10
                  ? true
                  : event.preventDefault()
              }
            />
            {/* Add error handling for mobile if needed */}
          </div>
          <div className="input_containerr">
            <label className="input_labelr" htmlFor="email_field">
              Email
            </label>
            <input
              required
              placeholder="Email"
              title="Input title"
              name="email"
              type="text"
              className="input_fieldr"
              id="email_field"
              onChange={handleChange}
            />
            {/* Add error handling for email if needed */}
          </div>
          <div className="input_containerr">
            <label className="input_label" htmlFor="password_field">
              Password
            </label>
            <input
              required
              placeholder="Password"
              title="Input title"
              name="password"
              type={showPass ? "text" : "password"}
              className="input_fieldr"
              id="password_field"
              onChange={handleChange}
            />
            <div
              className="password-toggler"
              onClick={() => setPassShow(!showPass)}
            >
              {showPass ? <VscEye /> : <VscEyeClosed />}
            </div>
          </div>
          {!isPassStrong && (
            <span className="warnig_msg">
              password must contain at least 8 characters, one uppercase letter,
              one lowercase letter, one number, and one special character.
            </span>
          )}
          <button
            title="Register"
            type="submit"
            className="sign-in_btnr"
            onClick={handleRegister}
          >
            <span>Submit</span>
          </button>
          <div className="separatorr">
            <hr className="liner" />
            <span>Or</span>
            <hr className="liner" />
          </div>
          <button
            title="Sign In"
            type="submit"
            className="sign-in_gglr"
            onClick={() => navigate("/")}
          >
            <span>Already have an account</span>
          </button>
        </form>
      </div>
    );
  }
);

export default RegisterPage;
