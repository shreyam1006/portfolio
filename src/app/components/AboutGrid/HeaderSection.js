import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const HeaderSection = () => {
  return (
    <div className="relative px-8 md:px-12 py-10 bg-skyblue border border-black rounded-xl">
      <div className="border-2 border-black border-dotted rounded-lg bg-pink w-fit px-4 py-1 font-semibold text-2xl text-black">
        About
      </div>
      <div className="">
        <p className="text-black text-4xl mt-3">Hi 👋🏻, I am</p>
        <h2 className="text-5xl md:text-7xl font-bold my-4 max-w-2xl">
          Shreya Maheshwari
        </h2>
        <p className="text-black text-3xl md:text-4xl mb-4 font-medium">
          Software Development Engineer
        </p>
        <p className="text-black text-xl mb-8">
          A software developer who loves turning ideas to exciting web
          applications.
          <br />
          With 3+ years of experience, I specialize in creating digital
          experiences that feels like touching grass.
        </p>
        <div className="flex gap-4 mt-4">
          <a
            href="https://www.linkedin.com/in/shreyam1006"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-yellow flex items-center justify-center text-xl transition-all hover:scale-110 cursor-pointer border border-black rounded-lg"
          >
            <FontAwesomeIcon icon={faLinkedinIn} className="text-black" />
          </a>
          <a
            href="https://github.com/shreyam1006"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-sage flex items-center justify-center text-xl transition-all hover:scale-110 cursor-pointer border border-black rounded-lg"
          >
            <FontAwesomeIcon icon={faGithub} className="text-black" />
          </a>
          <a
            href="https://www.instagram.com/shreyaamaheshwary/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-pink flex items-center justify-center text-xl transition-all hover:scale-110 cursor-pointer border border-black rounded-lg"
          >
            <FontAwesomeIcon icon={faInstagram} className="text-black" />
          </a>
          <a
            href="mailto:shreya.maheshwari.2000@gmail.com"
            className="w-12 h-12 bg-peach flex items-center justify-center text-xl transition-all hover:scale-110 cursor-pointer border border-black rounded-lg"
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-black" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
