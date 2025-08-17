import { PhoneCall } from 'lucide-react';
import React, { useState } from 'react';
import { MdEmail } from "react-icons/md";
import { CiLocationOn, CiLinkedin } from "react-icons/ci";
import { FaInstagram, FaGithub, FaFacebook } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import axios from 'axios';

const ContactDetails = () => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState({ type: '', text: '' });

  const handleMail = async (e) => {
    e.preventDefault();

    const serviceId = 'service_f6fdo8a';
    const templateId = 'template_ocvsgco';
    const publicKey = 'Xq7dd2pKQvVit7HGJ';

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: "AJITH TS",
        to_title: title,
        message: message,
      },
    };

    try {
      await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
      setStatus({ type: 'success', text: 'Message sent successfully!' });
      console.log("SUCCESS !")
      setName('');
      setTitle('');
      setEmail('');
      setMessage('');
    } catch (error) {
      setStatus({ type: 'error', text: 'There was an error sending your message.' });
      console.error(error);
    }
  };

  const inputClass =
    'bg-primary/10 text-foreground px-4 w-full h-[40px] outline-none rounded-md';

  return (
    <div id='contact' className="min-h-screen w-full flex flex-col items-center gap-6 px-4 py-10 mt-10">
      {/* Header */}
      <div className="text-center max-w-xl">
        <h1 className="text-3xl font-bold text-glow">
          Get in <span className="text-primary">Touch</span>
        </h1>
        <p className="text-[15px] font-semibold mt-2 text-foreground">
          Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.
        </p>
      </div>

      <div className='grid md:grid-cols-2 grid-cols-1 gap-12'>
        {/* Contact Info */}
        <div className='flex flex-col justify-evenly items-center gap-4'>
          <h2 className='text-2xl font-bold'>Contact Information</h2>

          {/* Info Item */}
          {[
            { icon: <PhoneCall size={25} className='text-primary' />, label: 'Phone', value: '+91 7204898615' },
            { icon: <MdEmail size={25} className='text-primary' />, label: 'Email', value: 'ajithtsajith3@gmail.com' },
            { icon: <CiLocationOn size={25} className='text-primary' />, label: 'Location', value: 'Bangalore, Karnataka' },
          ].map((item, i) => (
            <div key={i} className='flex items-center gap-4 w-[280px] p-2'>
              <div className='bg-primary/10 flex justify-center items-center rounded-full w-[50px] h-[50px]'>
                {item.icon}
              </div>
              <div className='flex flex-col font-semibold text-lg'>
                <span>{item.label}</span>
                <span>{item.value}</span>
              </div>
            </div>
          ))}

          {/* Socials */}
          <div className='mt-6 text-center'>
            <h3 className='text-foreground text-glow font-semibold mb-2'>Connect With Me</h3>
            <div className='flex justify-center gap-4'>
              <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram size={26} className='text-primary' /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"><CiLinkedin size={26} className='text-primary' /></a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook size={26} className='text-primary' /></a>
              <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub size={26} className='text-primary' /></a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleMail} className='bg-primary/20 w-full max-w-md z-40 p-6 rounded-lg flex flex-col gap-4'>
          <h2 className='text-2xl font-bold mb-2'>Send a Message</h2>
          <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} className={inputClass} />
          <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} />
          <input type="text" placeholder="Subject" value={title} onChange={(e) => setTitle(e.target.value)} className={inputClass} />
          <textarea placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)} className={`bg-primary/10 text-foreground  px-4 py-2 w-full h-[80px] outline-none rounded-md resize-none`}></textarea>
          
          {status.text && (
            <p className={`text-sm ${status.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
              {status.text}
            </p>
          )}

          <button type="submit" className='w-full h-[40px] mt-2 cosmic-button flex justify-center items-center gap-3'>
            Send the message <IoSend />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactDetails;
