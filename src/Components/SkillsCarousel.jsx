import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaPython, FaJsSquare, FaReact, FaNodeJs } from 'react-icons/fa';

const skills = [
  { name: 'Python', icon: <FaPython size={50} color="#306998" /> },
  { name: 'JavaScript', icon: <FaJsSquare size={50} color="#F7DF1E" /> },
  { name: 'React', icon: <FaReact size={50} color="#61DAFB" /> },
  { name: 'Node.js', icon: <FaNodeJs size={50} color="#68A063" /> },
  // Add more skills as needed
];

const SkillsCarousel = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000, // Adjust speed for continuous effect
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Set to 0 for continuous sliding
    cssEase: 'linear', // Linear easing for smooth continuous effect
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Tools I work with
        </h2>
        <Slider 
          {...settings} 
        >
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center"
            >
              <div className="mb-2 flex items-center justify-center">
                {skill.icon}
              </div>
              <p className="text-lg font-semibold text-gray-800 text-center">{skill.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SkillsCarousel;
