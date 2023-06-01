import React, { useState } from "react";
import "./ContactMe.css";
import "../../Terminals/Terminal.css";
import { validateEmail, validateText } from "../../Resources/util/helpers";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.id;
    const inputValue = target.value;

    if (inputType === "name") {
      setName(inputValue);
      if (!validateText(inputValue)) {
        setErrorName("Please enter a name.");
      } else {
        setErrorName("");
      }
    } else if (inputType === "email") {
      setEmail(inputValue);
      if (!validateEmail(inputValue)) {
        setErrorEmail("Please enter a valid email.");
      } else {
        setErrorEmail("");
      }
    } else {
      setMessage(inputValue);
      if (!validateText(inputValue)) {
        setErrorMessage("Please leave a message.");
      } else {
        setErrorMessage("");
      }
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();

    let error = false;

    if (!validateText(name)) {
      setErrorName(`Please enter a name.`);
      error = true;
    }

    if (!validateEmail(email)) {
      setErrorEmail("Please enter a valid email.");
      error = true;
    }
    if (!validateText(message)) {
      setErrorMessage(`Please leave a message.`);
      error = true;
    }

    if (error) {
      return;
    }

    setName("");
    setEmail("");
    setMessage("");
    alert("Email generated");
  };
  return (
    <div className="main">
      <form className="contactForm form">
        <h3>Contact Me</h3>
        <p>If you have a question or simply want to say hello.</p>
        <input
          data-testid="name"
          className="input"
          value={name}
          id="name"
          type="text"
          placeholder="Your Name"
          onChange={handleInputChange}
          onBlur={handleInputChange}
        ></input>
        <p>
          {errorName && (
            <span className="error-text text-danger">{errorName}</span>
          )}
        </p>
        <input
          data-testid="email"
          className="input"
          value={email}
          id="email"
          type="email"
          placeholder="Your Email"
          onChange={handleInputChange}
          onBlur={handleInputChange}
        ></input>
        <p>
          {errorEmail && (
            <span className="error-text text-danger">{errorEmail}</span>
          )}
        </p>
        <textarea
          data-testid="text-box"
          value={message}
          id="message"
          placeholder="Your Message"
          type="text"
          onChange={handleInputChange}
          onBlur={handleInputChange}
        ></textarea>
        <p>
          {errorMessage && (
            <span className="error-text text-danger">&nbsp;{errorMessage}</span>
          )}
        </p>
        <input
          data-testid="submitButton"
          type="submit"
          className="Submit"
          value="Submit"
          onClick={handleFormSubmit}
        ></input>
      </form>
    </div>
  );
};

export default ContactMe;
