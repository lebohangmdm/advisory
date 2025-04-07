import Image from "next/image";
import React from "react";
import logo from "@/public/Verdun_Logo1-1-removebg-preview.png";

const Logo = () => {
  return (
    <Image
      src={logo}
      alt='"verdun logo'
      style={{ objectFit: "cover", objectPosition: "center" }}
      width={200}
      height={200}
      className="bg-transparent"
    />
  );
};

export default Logo;
