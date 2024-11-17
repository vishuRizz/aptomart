import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center bg-gray-900 text-white p-6 rounded-md">
          <div>
            <h2 className="text-lg font-bold">Need more information?</h2>
            <p className="text-sm">Write your concern to us and our specialist will get back to you.</p>
          </div>
          <button className="mt-4 md:mt-0 bg-white text-gray-900 font-semibold py-2 px-4 rounded-md">
            Contact Us
          </button>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center md:text-left">
            <img src="/images/logo.png" alt="Logo" width={40} height={40} className="mx-auto md:mx-0 h-10 mb-4" />
            <p className="text-gray-600 text-sm">Shopping made easy</p>
          </div>
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Heading</h4>
            <div className="grid grid-cols-1 gap-2 text-gray-600">
              <a href="/" className="hover:underline">Link here</a>
              <a href="/" className="hover:underline">Link here</a>
              <a href="/" className="hover:underline">Link here</a>
              <a href="/" className="hover:underline">Link here</a>
            </div>
          </div>
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Heading</h4>
            <div className="grid grid-cols-1 gap-2 text-gray-600">
              <a href="/" className="hover:underline">Link here</a>
              <a href="/" className="hover:underline">Link here</a>
              <a href="/" className="hover:underline">Link here</a>
              <a href="/" className="hover:underline">Link here</a>
            </div>
          </div>
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Connect with us</h4>
            <div className="grid grid-cols-4 gap-2">
              <a
                href="https://www.facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center"
              >
                <FontAwesomeIcon icon={faFacebookF} className="text-white text-xl" />
              </a>
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center"
              >
                <FontAwesomeIcon icon={faTwitter} className="text-white text-xl" />
              </a>
              <a
                href="https://www.instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-white text-xl" />
              </a>
              <a
                href="https://www.tiktok.com/@yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center"
              >
                <FontAwesomeIcon icon={faTiktok} className="text-white text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
