const Footer = () => {
    return (
      <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>
  
        <div className="flex gap-3">
          <div className="social-icon">
          <a href="https://github.com/FrancescoTonin01" target="_blank">
          <img src="/img/github.png" alt="github" className=""  />
            </a>
          </div>
          <div className="social-icon">
          <a href="https://www.linkedin.com/in/francesco-tonin-392a1a236/" target="_blank">
            <img src="/img/linkedin.png" alt="linkedin" className="" />
            </a>
          </div>
          <div className="social-icon">
          <a href="https://profile.indeed.com/?hl=it_IT&co=IT&from=gnav-homepage" target="_blank">
            <img src="/img/indeed.png" alt="indeed" className="" />
          </a>
          </div>
        </div>
  
        <p className="text-white-500">© 2024 Francesco Tonin. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;