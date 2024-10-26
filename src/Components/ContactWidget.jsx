import React from 'react';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const ContactWidget = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">Contact Me</h2>
      <div className="flex space-x-4">
        <a 
          href="https://github.com/yourusername" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-600 hover:text-blue-600 transition"
        >
          <FaGithub size={30} />
        </a>
        <a 
          href="https://www.linkedin.com/in/yourusername" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-600 hover:text-blue-600 transition"
        >
          <FaLinkedin size={30} />
        </a>
        <a 
          href="mailto:your-email@example.com" 
          className="text-gray-600 hover:text-blue-600 transition"
        >
          <IoIosMail size={30} />
        </a>
      </div>
    </div>
  );
};

export default ContactWidget;
