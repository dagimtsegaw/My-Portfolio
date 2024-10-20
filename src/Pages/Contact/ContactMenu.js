import React, { useState } from "react";
import emailjs from "emailjs-com";
import DOMPurify from "dompurify";

export default function ContactMenu() {
  const initialState = {
    name: "",
    email: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const valdiateErrors = validateForm();
    if (Object.keys(valdiateErrors).length > 0) {
      setErrors(valdiateErrors);
      return;
    }
    setIsLoading(true);

    const { name, email, message } = formData;

    const sanitizedData = {
      name: "Name:" + DOMPurify.sanitize(name),
      name: "Email:" + DOMPurify.sanitize(email),
      name: "Message:" + DOMPurify.sanitize(message),
    };

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;
  };
}
