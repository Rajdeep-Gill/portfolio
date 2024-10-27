import React from 'react';
import SkillsCarousel from './SkillsCarousel';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

function HeroSection() {
    // A Hero Section With a Big Title, a subheading centered to the viewport vertically
    // An Image
    // Heading on left half, Image on right half
    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-4">
            <div className="max-w-7xl mx-auto bg-white">
                <div className='flex flex-col lg:flex-row items-center justify-center gap-12'>
                    <div className='lg:w-1/2 text-center lg:text-left'>
                        <h1 className='text-5xl lg:text-6xl font-bold text-gray-500 mb-6'>
                            Hi, I'm <span className="text-blue-950 drop-shadow-lg">Rajdeep Gill</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Computer Engineering Student, Web Developer.
                        </p>
                        <div className="flex justify-center gap-4">
                            <a 
                                href="https://github.com/Rajdeep-Gill" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-gray-600 hover:text-blue-600 transition"
                            >
                                <FaGithub size={30} />
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/rajdeep-gill-4ab365220" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-gray-600 hover:text-blue-600 transition"
                            >
                                <FaLinkedin size={30} />
                            </a>
                            <a 
                                href="mailto:hi.rajdeepgill@gmail.com" 
                                className="text-gray-600 hover:text-blue-600 transition"
                            >
                                <IoIosMail size={30} />
                            </a>
                        </div>
                    </div>
                    {/* Add an image placeholder here */}
                    <div className='lg:w-1/2 hidden lg:block'>
                        <img src="/path/to/your/image.jpg" alt="Hero Image" className="w-full h-auto rounded-lg shadow-lg" />
                    </div>
                </div>
            </div>
        </section>
    );  
}

export default HeroSection;
