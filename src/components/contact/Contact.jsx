import { React, useState } from "react";
import "./contact.scss";
import emailjs from "emailjs-com";

const Contact = () => {
  const [msg, setMsg] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const emailValidation = () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(email)) {
      setMessage("Email is Valid");
    } else if (!regEx.test(email) && email !== "") {
      setMessage("Email is not Valid");
    } else {
      setMessage("");
    }
  };
  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    setMsg(true);

    emailjs
      .sendForm(
        "service_f3mzfkj",
        "template_0ei0ong",
        e.target,
        "user_ihXqPg7an7uWBRs330zGB"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" required />
          <input
            type="text"
            name="user_email"
            placeholder="dummytext@dummymail.com"
            value={email}
            onChange={handleOnChange}
            required
          />
          <textarea name="message" placeholder="Message" required></textarea>
          <button onClick={emailValidation}>Send</button>
          <p>{message}</p>
        </form>
      </div>
    </div>
  );
};

export default Contact;
