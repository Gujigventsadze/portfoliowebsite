import "../styles/Contact.css";
import { useRef } from "react";
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_ie4jj7d', 'template_rf180lm', form.current, {
          publicKey: 'FDSXdgkm668lEA5FX',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
    return (
        <section id="contact">
            <div className="contact-title">
                Lets Get in touch
            </div>
             <form className="form-container" ref={form} onSubmit={sendEmail}>
                <input placeholder="Name" type="text" name="user_name" />
                <input placeholder="Email" type="email" name="user_email" />
                <textarea placeholder="Message" name="message" />
                <input className="btn" type="submit" value="Send" />
            </form>
        </section>
    )
}


export default Contact;