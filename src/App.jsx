import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import ProjectCard from "./Components/ProjectCard";
import ExperienceTimeline from './Components/ExperienceTimeline';
import CursorEffect from './Components/CursorEffect';
import SkillsCarousel from './Components/SkillsCarousel';

function App() {
    const experiences = [
        {
            jobTitle: "Machine Learning Research Intern",
            company: "Biosensors Research Lab",
            location: "Winnipeg, MB",
            date: "2024 - Present",
            description: "Developed programs to analyze biological data using machine learning algorithms and deep learning models.",
            tags: ["Python", "PyTorch", "TensorFlow", "Keras", "Scikit-learn", "Pandas", "Numpy"]
        },
        {
            jobTitle: "Data Analytic Research Student",
            company: "Biosensors Research Lab",
            location: "Winnipeg, MB",
            date: "2023",
            description: "Developed a computer vision algorithm to detect the center of a cell moving through a microfluidic channel. Improved the efficiency of existing algorithms by optimizing the algorithm and utilizing parallel processing.",
            tags: ["Python", "Parallel Processing", "Computer Vision"]
        },
        // Add more experiences as needed
    ];

    const projects = [
        {
            title: "Discord Clone",
            description: "Created a clone of Discord using Next.js with Typescript and Tailwind CSS. Features include user authentication, real-time messaging, server management, video and voice calling.",
            image: "image1.jpg",
            tags: ["Next.js", "Typescript", "Tailwind CSS"]
        },
        {
            title: "Weather Monitoring System",
            description: "Developed a system to monitor weather conditions by communicating with a microcontroller over wi-fi. The system includes a mobile app for monitoring the temperature and pressure, and utilizes the TCP/IP protocol to communicate with the microcontroller.",
            image: "image2.jpg",
            tags: ["Java", "Android Studio", "C", "TCP/IP", "Microcontroller"]
        },
        {
            title: "Chess Game",
            description: "Created a chess game using Python, with multiplayer capabilities using websockets.",
            image: "image3.jpg",
            tags: ["Python", "Websockets"]
        }
    ]

    return (
        <div className="relative overflow-hidden">
            <CursorEffect />
            <div className="bg-white relative z-10">
                <Navbar />
                <HeroSection />
                <SkillsCarousel />
                {/* Experience Section */}
                <section id="experience" className="py-20 bg-white">
                    <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Work Experience</h2>
                    <ExperienceTimeline experiences={experiences} />
                </section>
                {/* Projects Section */}
                <section id="projects" className="py-20 bg-white px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Featured Projects</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">  
                            {projects.map((project, index) => (
                                <ProjectCard key={index} {...project} />
                            ))}
                        </div>
                    </div>
                </section>
            {/* Footer - Thanks For Stopping By :)*/}
            <div className="bg-gray-900 text-white py-6 mt-20">
                <div className="container mx-auto text-center">
                    <p className="text-lg mb-4">Thanks for stopping by! 😊</p>
                    <p className="text-sm">© {new Date().getFullYear()} Rajdeep Gill. All rights reserved.</p>
                </div>
            </div>
            </div>
        </div>
    );
}

export default App;
