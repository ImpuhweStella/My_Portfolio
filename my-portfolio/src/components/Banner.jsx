// Banner.jsx
import React from "react";
import profileImage from "../assets/Stella.jpg"; 
import { Link } from "react-router-dom";
import { BsSend } from "react-icons/bs";
import { TfiDownload } from "react-icons/tfi";

const Banner = () => {
  return (
    <section className="text-center py-20 bg-[#0d0d1f] text-white">
      {/* Profile Image */}
      <div className="flex justify-center mb-8">
        <img
          src={profileImage}
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-[#FF6347]"
        />
      </div>

      {/* Introduction Text */}
      <div className="text-lg md:text-2xl ml-[50px] ">
        <p>
          Hi, I’m <span className="text-[#FF6347] font-semibold">Impuhwe Stella</span>,
          a software developer from Rwanda. I specialize in Web Development.
        </p>
        <p className="mt-4">
          I’m currently working  as a Software Developer at
          <span className="text-[#FF6347] font-semibold"> Igire Rwanda Organization</span>, a non-profit organization based in Rwanda.
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex justify-center space-x-4">
        <Link
          to="/contact"
          className="px-6 py-3 border border-[#FF6347] rounded-lg text-white hover:bg-[#FF6347] transition duration-300 flex items-center"
        >
          Get in touch 
          <BsSend className="ml-2"/>
        </Link>
        <a
          href="/ImpuhweStella-CV.pdf" 
          download
          className="px-6 py-3 border border-[#FF6347] rounded-lg text-white hover:bg-[#FF6347] transition duration-300 flex items-center"
        >
          Resume 
          <TfiDownload className="ml-2" />
        </a>
      </div>
    </section>
  );
};

export default Banner;
