import emailjs from "@emailjs/browser";
import React from 'react';
import Image from 'next/image';
import { Wave } from 'react-animated-text';
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import TextTransition, { presets } from "react-text-transition";
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import Swal from 'sweetalert2';
import contact from "../public/contact.jpg";
export const Contact = () => {
  const TEXTS = [
    "MERN Stack",
    "Front-End",
    "Full Stack"
  ];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    setName('');
    setPhone('');
    setEmail('');
    setSubject('');
    setMessage('');
    e.preventDefault();

    emailjs.sendForm('service_10qdgud', 'ProsenjitRay', e.target, '0_YT4HBdwq3g9VkdA')
      .then((result) => {
        Swal.fire(
          'Your Message has been successfully sent.',
          'I will contact you very Soon.',
          'success'
        )
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  };


  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <p className='text-xl tracking-widest uppercase text-[#067DE7]'>
          Contact
        </p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src={contact}
                  alt='/' height="" width=""
                />
              </div>
              <div>
                <h2 className='py-2'><span className='text-[#067DE7] inline-block'> <Wave text="Prosenjit Ray" effect="verticalFadeIn" effectDirection="up" iterations={1} /></span></h2>
                <p className='py-2 text-gray-700'>A <span className="inline-block text-[#0EC8E5]"><TextTransition
                  text={TEXTS[index % TEXTS.length]}
                  springConfig={presets.stiff}
                /></span> Developer</p>
                <p className='py-4'>
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className='uppercase pt-8'>Connect With Me</p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                  <a
                    href='https://www.linkedin.com/in/prosenjit-ray-p/'
                    target='_blank' rel="noreferrer"
                  >

                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:bg-[#0A66C2] hover:text-white ease-in duration-300'>
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a href='https://github.com/PPProsenjit/' target='_blank' rel="noreferrer">
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:bg-[#BABBBD] hover:text-black ease-in duration-300'>
                      <FaGithub />
                    </div>
                  </a>
                  <Link href='/#contact'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:bg-gradient-to-r from-[#067DE7] to-[#0EC8E5] hover:text-white ease-in duration-300'>
                      <AiOutlineMail />
                    </div>
                  </Link>
                  <a href='https://www.facebook.com/pappu03455' target='_blank' rel="noreferrer">
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:bg-[#067DE7] hover:text-white ease-in duration-300'>
                      <FaFacebook />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form
                onSubmit={handleSubmit}
                action='https://getform.io/f/805a26a3-8a34-499e-9749-7466dfe063d8'
                method='POST'
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='name'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>
                      Phone Number
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='phone'
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name='subject'
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='10'
                    name='message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <button className='w-full p-4 text-gray-100 mt-4'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <HiOutlineChevronDoubleUp className='text-[#067DE7]' size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

