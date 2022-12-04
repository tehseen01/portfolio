import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import React, { useRef } from "react";
import "../SASS/contact.scss";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sz6s13m",
        "template_7oe509h",
        refForm.current,
        "xvVMqXY1DKEFAjurd"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <main className="contact">
      <div className="contact-text">
        <h1>Get in touch</h1>
        <p>
          Hey! We are looking forward to start a project with you ! Feel free to
          reach out....
        </p>
        <div className="social-links">
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:tehseen.type@gmail.com"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a
            href="https://github.com/tehseen01"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://instagram.com/tehseen.01"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://codepen.io/codebytehseen"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faCodepen} />
          </a>
        </div>
      </div>
      <div className="contact-form">
        <form action="/" autoComplete="off" ref={refForm} onSubmit={sendEmail}>
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" placeholder="Type Name" />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Type Email" />
          <label htmlFor="suject">Subject</label>
          <input type="text" id="subject" placeholder="Subject" />
          <label htmlFor="message">Message</label>
          <textarea
            name="textaria"
            id="message"
            placeholder="Enter your Message"
          ></textarea>
          <div className="btn-box">
            <button type="submit" className="submit-btn">
              Sent Message!
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Contact;
