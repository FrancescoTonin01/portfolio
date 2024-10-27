import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';

import { myProjects } from '../constants/index.js';

const projectCount = myProjects.length;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };



  const currentProject = myProjects[selectedProjectIndex];

  return (
    <section className="c-space my-20">
      
      <p className="head-text">My Selected Work</p>

      <div className="mt-12 gap-5 w-full ">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200 ">
          <div className="absolute top-0 right-0">
            <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
          </div>

          <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
            <img className="shadow-sm w-20 h-20" src={currentProject.logo} alt="logo" />
          </div>

          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>

            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>

          <div className="flex-col items-center justify-between flex-wrap gap-5 ">
            <div className="flex items-center justify-center gap-10 md:flex-row flex-col">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo flex-col text-white-500 object-cover">
                  <img src={tag.path} alt={tag.name} />
                  <p className="p-2 ">{tag.name}</p>
                </div>
              ))}
            </div>
          </div>

          <a
              className="flex items-center gap-2 cursor-pointer text-white-600 ml-auto mr-auto w-fit"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer">
              <p className="text-xl">Check Live Site</p>
              <img src="/img/up.png" alt="arrow" className="w-6 h-6 
              rounded-full" />
            </a>
          <div className="flex justify-between items-center mt-7">
            <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
              <img src="/img/left.png" alt="left arrow" />
            </button>

            <button className="arrow-btn" onClick={() => handleNavigation('next')}>
              <img src="/img/right-arrow.png" alt="right arrow" className="w-4 h-4" />
            </button>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Projects;