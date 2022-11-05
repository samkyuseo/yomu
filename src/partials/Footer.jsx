import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.svg';

function Footer() {
  return (
    <footer>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Top area: Blocks */}
          <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">

          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            {/* Copyrights note */}
            <div className="flex mb-2">
              <img src={Logo} className='w-5'/>
              <div className="text-gray-800 font-medium mx-2 my-auto">Yomu</div>
            </div>
            <p className="text-sm font-light text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
              An engineer-first company.
            </p>
          </div>
          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Founding Team</h6>
            <p className='text-sm font-medium text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out'>
              Samuel Lee
            </p>
            <p className='text-sm font-light text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out'>
              Software Engineer
            </p>
          </div>
          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Socials</h6>
            <p className='text-sm font-medium text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out'>
              Twitter
            </p>
            <p className='text-sm font-light text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out'>
              @yomuapp
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
