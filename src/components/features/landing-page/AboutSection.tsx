import React from "react";
import { Button } from "../../ui/button";
import AboutImage from "@/assets/about-image.png";
import ClapHands from "@/assets/clap-hand.png";

const AboutSection = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10">
      {/* Left Side - Image with overlay box */}
      <div className="relative md:w-1/2 w-full">
        <img
          src={AboutImage}
          alt="Crefy development team"
          className="rounded-2xl w-full object-cover"
        />

        {/* Overlay Box */}
        <div className="absolute -top-8 left-8 bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-lg shadow-lg max-w-[260px]">
          <p className="text-4xl font-bold">50+</p>
          <p className="mt-2 text-lg font-semibold leading-tight">
            dApps powered by <br /> Crefy infrastructure
          </p>
        </div>
      </div>

      {/* Right Side - Text Content */}
      <div className="md:w-1/2 w-full">
        <p className="text-purple-600 font-semibold mb-2 uppercase tracking-wider">
          About Crefy
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-snug">
          Building the Future of <br /> Web3 Infrastructure
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          At Crefy, we're pioneering the next generation of Web3 infrastructure. 
          Our comprehensive suite of developer tools empowers builders to create 
          secure, scalable, and user-friendly decentralized applications. From seamless 
          wallet integration to advanced identity verification, we provide the foundation 
          that lets innovators focus on what matters most - building the future of web3.
        </p>

        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center text-3xl font-bold text-gray-900">
          <img
          src={ClapHands}
          alt="Crefy development team"
          className="rounded-2xl w-full object-cover"
        />
             50+
          </div>
          <div>
            <p className="text-lg font-semibold">dApps</p>
            <p className="text-gray-600 text-sm">Powered by Crefy</p>
          </div>
        </div>

        <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 py-3 rounded-lg">
          Explore Our Products »
        </Button>
      </div>
    </section>
  );
};

export default AboutSection;