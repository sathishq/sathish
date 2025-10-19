import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import styled from "styled-components";
import ContactInfoItem from "../components/ContactInfoItem";
import SectionTitle from "../components/SectionTitle";
import emailjs from "emailjs-com";
import { FaLinkedin } from "react-icons/fa";

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  .contact__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;

    .left {
      width: 100%;
      max-width: 500px;
    }
    .right {
      width: 100%;
      max-width: 500px;
    }
  }
  .contact__wrapper::after {
    position: absolute;
    content: "";
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }

  @media only screen and (max-width: 768px) {
    .contact__wrapper {
      flex-direction: column;
      .left,
      .right {
        max-width: 100%;
      }
      &::after {
        display: none;
      }
    }
  }
`;

const FormSectionStyle = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
    label {
      font-size: 1.8rem;
      input,
      textarea {
        width: 100%;
        font-size: 2rem;
        padding: 1.2rem;
        color: var(--gray-1);
        background-color: var(--deep-dark);
        outline: none;
        border: none;
        border-radius: 8px;
        margin-top: 1rem;
      }
      textarea {
        min-height: 250px;
        resize: vertical;
      }
    }
  }
  button[type="submit"] {
    font-size: 1.8rem;
    background-color: var(--gray-1);
    padding: 0.7em 1.5em;
    border-radius: 8px;
    border: 2px solid var(--gray-1);
    color: black;
    transition: 1s ease;

    &:hover {
      background-color: transparent;
      color: var(--gray-1);
    }
  }

  @media only screen and (max-width: 768px) {
    button[type="submit"] {
      font-size: 1.4rem;
    }
  }
`;

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6rjxzum",
        "template_zwpxzec",
        e.target,
        "user_4XxLhG5Qjqm436rvmL6fY"
      )
      .then((res) => {
        alert(
          "Your message has been sent, you will recieve a response on you email soon."
        );
      })
      .catch((er) => {
        alert(
          "Some problem occurred while sending the message:: " +
            er +
            "\nPlease try again or send an email on skshamagarwal@gmail.com"
        );
      });
    setName("");
    setEmail("");
    setMessage("");
  }
  return (
    <>
      <ContactSectionStyle>
        <div className="container">
          <SectionTitle heading="Contact" subheading="Get in touch" />
          <div className="contact__wrapper">
            <div className="left">
              <a
                href="mailto:skshamagarwal@gmail.com"
                target="_blank"
                rel="noreferrar noreferrer"
              >
                <ContactInfoItem
                  icon={<MdEmail />}
                  text="skshamagarwal@gmail.com"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/skshamagarwal/"
                target="_blank"
                rel="noreferrar noreferrer"
              >
                <ContactInfoItem icon={<FaLinkedin />} text="Linked In" />
              </a>
              <ContactInfoItem text="Santacruz, Mumbai - India" />
            </div>
            <div className="right">
              <FormSectionStyle onSubmit={sendEmail}>
                <div className="form-group">
                  <label htmlFor="name">
                    Your Name
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    Your Email
                    <input
                      required
                      name="email"
                      type="text"
                      id="email"
                      email="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="message">
                    Your Message
                    <textarea
                      required
                      name="message"
                      type="text"
                      id="message"
                      message="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </label>
                </div>
                <button type="submit" value="Send">
                  Send
                </button>
              </FormSectionStyle>
            </div>
          </div>
        </div>
      </ContactSectionStyle>
      {/* <div>
        <Map />
      </div> */}
    </>
  );
}
