import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const HeaderSection = () => {
  const [nameIdx, setNameIdx] = useState(0);
  const name = "Shreya Maheshwari".split("");

  const [titleIdx, setTitleIdx] = useState(0);
  const title = "Software Development Engineer".split("");

  useEffect(() => {
    const id = setInterval(() => {
      if (nameIdx < name.length) {
        setNameIdx(nameIdx + 1);
      }
      if (titleIdx < title.length) {
        setTitleIdx(titleIdx + 1);
      }
    }, 100);

    return () => {
      clearInterval(id);
    };
  });

  return (
    <div className="relative px-8 md:px-12 py-10 bg-skyblue border border-black rounded-xl">
      <div className="border-2 border-black border-dotted rounded-lg bg-pink w-fit px-4 py-1 font-semibold text-2xl text-black">
        About
      </div>
      <div className="">
        <p className="text-black text-4xl mt-3">Hi 👋🏻, I am</p>
        <h2 className="text-pink text-5xl md:text-6xl font-bold my-4 max-w-2xl border border-black bg-white p-4">
          {name.slice(0, nameIdx).join("")}
          <span className="inline-block mx-2 w-6 h-1 bg-pink animate-pulse"></span>
        </h2>
        <p className="text-black text-3xl md:text-4xl mb-4 font-medium">
          {title.slice(0, titleIdx).join("")}
          <span className="inline-block w-3 h-0.5 mx-1 bg-black animate-pulse"></span>
        </p>
        <p className="text-black text-xl mb-8">
          A software developer who loves turning ideas to exciting web
          applications.
          <br />
          With 3+ years of experience, I specialize in creating digital
          experiences that feels like touching grass.
        </p>
        <div className="flex gap-4 mt-4">
          <Link
            href="https://www.linkedin.com/in/shreyam1006"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-yellow flex items-center justify-center text-xl transition-all hover:scale-110 cursor-pointer border border-black rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <FontAwesomeIcon icon={faLinkedinIn} className="text-black" />
          </Link>
          <Link
            href="https://github.com/shreyam1006"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-sage flex items-center justify-center text-xl transition-all hover:scale-110 cursor-pointer border border-black rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <FontAwesomeIcon icon={faGithub} className="text-black" />
          </Link>
          <Link
            href="https://www.instagram.com/shreyaamaheshwary/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-pink flex items-center justify-center text-xl transition-all hover:scale-110 cursor-pointer border border-black rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <FontAwesomeIcon icon={faInstagram} className="text-black" />
          </Link>
          <Link
            href="mailto:shreya.maheshwari.2000@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-peach flex items-center justify-center text-xl transition-all hover:scale-110 cursor-pointer border border-black rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-black" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
