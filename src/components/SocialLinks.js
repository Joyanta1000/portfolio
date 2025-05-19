// components/SocialLinks.js
'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faBehance,
  faYoutube,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

export default function SocialLinks() {
  return (
    <div className="flex space-x-4 bg-gray-900 py-6">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
         className="bg-gray-800 text-white p-4 rounded-full hover:bg-gray-700 transition">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a href="https://behance.net" target="_blank" rel="noopener noreferrer"
         className="bg-gray-800 text-white p-4 rounded-full hover:bg-gray-700 transition">
        <FontAwesomeIcon icon={faBehance} />
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
         className="bg-gray-800 text-white p-4 rounded-full hover:bg-gray-700 transition">
        <FontAwesomeIcon icon={faYoutube} />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
         className="bg-gray-800 text-white p-4 rounded-full hover:bg-gray-700 transition">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
         className="bg-gray-800 text-white p-4 rounded-full hover:bg-gray-700 transition">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </div>
  );
}
