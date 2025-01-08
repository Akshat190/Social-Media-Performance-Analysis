import Image from 'next/image';
import React from 'react';

const TeamSection = () => {
  return (
    <div className="mt-8 text-center">
      <p className="text-gray-600 mb-4">Made By Team Morse Coders For Pre-Hackathon (Level SuperMind)</p>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Team</h2>
      <div className="flex justify-center space-x-12">
        <div className="flex flex-col items-center">
          <a
            href="https://www.linkedin.com/in/akshat-choksi-b0b15a28b"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/ak.jpeg"
              alt="Akshat Choksi"
              className="w-16 h-16 rounded-full object-cover"
              width={100}
              height={100}
            />
          </a>
          <p className="mt-2 font-medium text-gray-700">Akshat Choksi</p>
        </div>
        <div className="flex flex-col items-center">
          <a
            href="https://www.linkedin.com/in/rashii28?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/rashi.jpeg"
              alt="Rashi M"
              className="w-16 h-16 rounded-full object-cover"
              width={100}
              height={100}
            />
          </a>
          <p className="mt-2 font-medium text-gray-700">Rashi M</p>
        </div>
        <div className="flex flex-col items-center">
          <a
            href="https://www.linkedin.com/in/stavan-maniyar-099950284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/stavan.jpeg"
              alt="Stavan Maniyar"
              className="w-16 h-16 rounded-full object-cover"
              width={100}
              height={100}
            />
          </a>
          <p className="mt-2 font-medium text-gray-700">Stavan Maniyar</p>
        </div>
        <div className="flex flex-col items-center">
          <a
            href="https://www.linkedin.com/in/aditya-shah-76153828a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/adi.jpeg"
              alt="Aditya Shah"
              className="w-16 h-16 rounded-full object-cover"
              width={100}
              height={100}
            />
          </a>
          <p className="mt-2 font-medium text-gray-700">Aditya Shah</p>
        </div>
      </div>
    </div>
  );
}

export default TeamSection;