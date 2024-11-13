import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo: React.FC = () => {
  const showLogoImage = true; // Cambia esta variable según la condición

  return (
    <div>
      <Link href="/">
        {showLogoImage ? (
          <img
            width={80}
            height={40}
            src={'/images/logoBet.png'}
            className="w-20 h-auto md:w-40 cursor-pointer"
            alt="Logo Bet"
          />
        ) : (
          <h1 className="text-5xl">
            BET<span className="text-yellow-300 font-bold">30</span>
          </h1>
        )}
      </Link>
    </div>
  );
};

export default Logo;
