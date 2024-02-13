import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RegisterPage from "../Page/RegisterPage";

const Register = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const ref = useRef(null);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    // phone: "",
    email: "",
    password: "",
  });
  const [isPassStrong, setIsPassStrong] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    if (formData.password) {
      setIsPassStrong(isPasswordStrong(formData.password));
    } else {
      setIsPassStrong(true);
    }
  }, [formData]);

  const isPasswordStrong = (password) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValid = true;

    // if (!formData.phone) {
    //   toast.warn("Mobile Number is required");
    //   isValid = false;
    // }
    if (!formData.email) {
      toast.warn("Email is required.");
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      toast.warn("Invalid email format.");
      isValid = false;
    }
    if (!formData.password) {
      toast.warn("Password is required.");
      isValid = false;
    } else if (!isPasswordStrong(formData.password)) {
      toast.warn("Invalid password format.");
      isValid = false;
    }

    return isValid;
  };

  const handleRegister = async (e) => {
    ref.current.continuousStart();
    e.preventDefault();
    const isFormValid = validateForm();
    if (!isFormValid) {
      ref.current.complete();
      return;
    }
    try {
      const response = await fetch(`${BASE_URL}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success !== true) {
        toast.error(data.message);
        ref.current.complete();
        return;
      }
      toast.success("Registration complete");
      ref.current.complete();
      localStorage.setItem("token", data.token);
      navigate("/home");
    } catch (error) {
      toast.error("Registration Failed");
      ref.current.complete();
      console.error("Error during registration:", error);
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
      <RegisterPage
        handleRegister={handleRegister}
        handleChange={handleChange}
        ref={ref}
        isPassStrong={isPassStrong}
      />
    </>
  );
};

export default Register;
