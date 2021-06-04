import React, { useState } from "react";
import '../css/contact.css';

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (

    <div className = 'container'>
      <div className = 'row' id = 'contact'>
        <div className = 'col-sm-12'>
          <p className = 'centered' id = 'contact-title'>Contact</p>
        </div>
      </div>
      
      <div className = 'row row-margin-2'>
        <div className = 'col-sm-12'>
          <form onSubmit = {handleSubmit}>

            <div className = 'form-group'>
              <label htmlFor = 'name'>Name:</label>
              <input
                type = 'text'
                className = 'form-control'
                id = 'name' 
                required
              />
            </div>

            <div className = 'form-group'>
              <label htmlFor = 'email'>Email:</label>
              <input 
                type = 'email'
                className = 'form-control' 
                id = 'email' 
                required />
            </div>

            <div className = 'form-group'>
              <label htmlFor = 'message'>Message:</label>
              <input
                type = 'text'
                className = 'form-control'
                id = 'message'
                required
              />
            </div>

            <button type = 'submit' className = 'btn' id = 'submit-form'>{status}</button>
          </form>
        </div>
      </div>
    </div>


    // <form onSubmit={handleSubmit}>
    //   <div>
    //     <label htmlFor="name">Name:</label>
    //     <input type="text" id="name" required />
    //   </div>
    //   <div>
    //     <label htmlFor="email">Email:</label>
    //     <input type="email" id="email" required />
    //   </div>
    //   <div>
    //     <label htmlFor="message">Message:</label>
    //     <textarea id="message" required />
    //   </div>
    //   <button type="submit">{status}</button>
    // </form>
  );
};

export default ContactForm;