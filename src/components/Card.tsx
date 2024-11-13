import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface Props {
  title: string;
  href: string;
  src: string;
}

const Card: FC<Props> = ({ href, title, src }) => {
  return (
    <div className="h-full shadow-sm overflow-hidden flex flex-col justify-center cursor-pointer rounded-xl relative group">
      <div className="overflow-hidden flex justify-center items-center relative rounded-xl div-image-container">
        <Image
          src={`https://a7a.nyc3.cdn.digitaloceanspaces.com/userFiles/games.a7a.club/${src}`}
          alt={title}
          width={200}
          height={200}
          className="transform group-hover:scale-105 group-hover:blur-[2px] transition-transform duration-500 object-cover w-full h-full"
        />

        <Link
          href={href}
          className="absolute text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        >
          {/* SVG de Play */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="72"
            height="72"
            fill="#001c65"
            viewBox="0 0 24 24"
            color="white"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </Link>
      </div>
      <p className="font-thin text-xs text-gray-400 md:p-2 md:text-sm py-2 text-center whitespace-nowrap overflow-hidden text-ellipsis">
        {title.charAt(0).toUpperCase() + title.slice(1).toLowerCase()}
      </p>
    </div>
  );
};

export default Card;
