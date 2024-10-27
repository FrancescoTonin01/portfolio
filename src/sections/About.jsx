import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(' adrian@jsmastery.pro');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="img/profile.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m Francesco Tonin</p>
              <p className="grid-subtext">
               I&apos;m a creative developer with a passion for building beautiful and functional websites.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="img/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
              I'm proficient in HTML, CSS, JavaScript, React, and Express. I also have experience with various libraries and frameworks such as Tailwind CSS, Three.js, and Next.js.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 45, lng: 11, text: 'Padova, Italy', color: 'white', size: 200 }]}
                ringsData	= {[{ lat: 45, lng: 11}]}
              />
            </div>
            <div>
              <p className="grid-headtext">Open to Remote Work and Collaboration</p>
              <p className="grid-subtext">Based in Padova, Italy, and open to remote opportunities worldwide. Ready to collaborate across time zones.</p>
              <a href="#contact">
              <Button name="Contact Me" isBeam containerClass="w-full mt-10 " />

              </a>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="img/grid4.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-cover" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
              I love starting new projects and bringing ideas to life through code.
               Creating things from scratch and solving problems fuels my passion for programming, and I’m always excited to explore new technologies and turn concepts into reality.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container justify-center ">
            <img
              src="img/grid5.png"
              alt="grid-4"
              className="w-full h-20 object-contain items-center sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'img/check.png' : 'img/note.png'} alt="copy" className="w-6" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">job@francescotonin.it</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;