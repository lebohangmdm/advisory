import Image from "next/image";
import React from "react";
import logo from "@/public/verdun-header-logo.png";

const Logo = () => {
  return (
    <div className="flex items-start gap-1.5">
      <Image
        src={logo}
        alt='"verdun logo'
        style={{ objectFit: "cover", objectPosition: "center" }}
        width={25}
        height={25}
        className="bg-transparent"
      />
      <p className="font-bold text-lg text-blue-500">Verdun</p>
    </div>
  );
};

export default Logo;
