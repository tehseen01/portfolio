import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faInstagram,
  faCodepen,
} from '@fortawesome/free-brands-svg-icons'
import React, { useRef } from 'react'
import '../SASS/contact.scss'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import emailjs from '@emailjs/browser'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate = useNavigate()
  const refForm = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_sz6s13m',
        'template_7oe509h',
        refForm.current,
        'xvVMqXY1DKEFAjurd'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          navigate('/')
        },
        () => {
          alert('Failed to send message, please try again')
        }
      )
  }

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
        <form autoComplete="off" ref={refForm} onSubmit={sendEmail}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Type Name"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Type Email"
            required
          />
          <label htmlFor="suject">Subject</label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Enter your Message"
            required
          ></textarea>
          <div className="btn-box">
            <button type="submit" className="submit-btn">
              Sent Message!
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Contact
