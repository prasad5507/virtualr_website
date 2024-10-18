import { resourcesLinks, platformLinks, communityLinks } from "../constants";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import React from "react";
const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <h3 className="text-md font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-row items-center space-x-4 mt-4">
            <a href="">
              <FaSquareInstagram
                className="text-neutral-300 hover:text-pink-600"
                size={25}
              />
            </a>
            <a
              target="blank"
              href="https://www.linkedin.com/in/prasad-samrat-72b2112ab/"
            >
              <FaLinkedin
                className="text-neutral-300 hover:text-blue-600"
                size={25}
              />
            </a>
            <a target="blank" href="https://github.com/prasad5507/prasad5507">
              <FaGithub
                className="text-neutral-300 hover:text-white"
                size={25}
              />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Platform</h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
