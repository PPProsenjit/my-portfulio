import Image from 'next/image';
import React from 'react';
import profile from "../public/pappu.jpg"
const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center lg:flex-row-reverse py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who Am i !</h2>

          <p className='py-2 text-gray-600'>
            Myself Prosenjit Ray. I received my bachelor&apos;s degree in computer science and engineering, and since then, I&apos;ve been studying web programming for the last seven months in an effort to work as a professional web developer. Working with computers and other technology has always been fun for me. I started utilizing HTML and CSS in 2022 to make minor adjustments to a small company website that I was in charge of. What began as a few little adjustments turned into a passion for programming.
          </p>
          <p className='py-2 text-gray-600'>
            Because of how complicated programming can be, I was instantly compelled to learn more about it. My enthusiasm for building interactive websites increased as I started learning javascript. After that, I enrolled in Jhankar Mahbub&apos;s web development course. I now spend my time learning about new technologies and developing applications using React JS, Firebase, and MongoDB.
          </p>
          <a href='/#projects' target="_blank" rel='norefferer'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out my latest projects.
            </p>
          </a>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image
            className='rounded-xl'
            src={profile} width="1364" height="1400"
            alt='/'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
