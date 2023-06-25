import React from "react";

import {logo} from '../assets'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-4'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />
        <div className="flex flex-row-reverse space-x-4 space-x-reverse">
        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/KrAman070", "_blank")
          }
          className='red_btn'
        >
          GitHub
        </button>
        <button
          type='button'
          onClick={() =>
            window.open("https://www.linkedin.com/in/kumar-aman-30a1a8208/", "_blank")
          }
          className='red_btn'
        >
          LinkedIn
        </button>
        </div>
      </nav>

      <h1 className='head_text'>
        Summarize your Articles using <br className='max-md:hidden' />
        <span className='red_gradient '>AI GPT-1.O</span>
      </h1>
      <h2 className='desc'>
        Get simplified summary of your article and blogs with the Gpt-1.O within few clicks.
      </h2>
    </header>
  );
};

export default Hero;
