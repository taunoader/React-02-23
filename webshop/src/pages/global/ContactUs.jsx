import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dz8uc5f', 'template_ydjmaix', form.current, 'qEatrE5EzU0yjt4PF')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <TextField id="from_name" label="Name" variant="outlined" /> <br /><br />
      <TextField id="from_email" label="Email" variant="outlined" /> <br /><br />
      <TextField id="message" label="Message" variant="outlined" /> <br /><br />
      <Button type="submit" variant="contained">Send</Button>
    </form>
  );
};