import React from "react";

function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
        <label htmlFor="message">Message:</label>
        <textarea id="message"></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
