import Image from "next/image";
import logo from "@/public/verdun-mini-logo.png";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className="flex items-start gap-1.5">
      <Image
        src={logo}
        alt='"verdun logo'
        style={{ objectFit: "cover", objectPosition: "center" }}
        width={25}
        height={25}
        className="bg-transparent"
      />
      <p className="font-bold text-lg text-blue-500">Verdun</p>
    </Link>
  );
};

export default Logo;
