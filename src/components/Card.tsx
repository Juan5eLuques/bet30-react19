import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface Props {
  title: string;
  href: string;
  src: string;
}

const NEXT_PUBLIC_CDN_BASE_URL = process.env.NEXT_PUBLIC_CDN_BASE_URL;


const Card: FC<Props> = ({ href, title, src }) => {
  return (
    <div className="h-full shadow-sm overflow-hidden flex flex-col justify-center cursor-pointer rounded-xl relative group">
      <div className="overflow-hidden flex justify-center items-center relative rounded-xl div-image-container">
        <Image
          src={`${NEXT_PUBLIC_CDN_BASE_URL}/userFiles/games.a7a.club/${src}`}
          alt={title}
          width={200}
          height={200}
          className="transform group-hover:scale-105 group-hover:blur-[2px] transition-transform duration-500 object-cover w-full h-full"
        />

        <Link
          href={href}
          className="absolute text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        >
          <svg
            className="w-16 h-16 md:w-20 md:h-20"
            viewBox="0 0 80 80"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.3" width="72" height="72" rx="40" fill="#001c65" />
            <path
              fill="white"
              d="M28.3716 48.5005C27.9111 48.4997 27.4588 48.379 27.0591 48.1503C26.1591 47.6403 25.5996 46.6503 25.5996 45.5755V23.8255C25.5996 22.7478 26.1591 21.7608 27.0591 21.2508C27.4683 21.0156 27.9332 20.8947 28.4051 20.9006C28.877 20.9065 29.3387 21.0391 29.7419 21.2845L48.3306 32.4115C48.718 32.6544 49.0374 32.9918 49.2588 33.3919C49.4801 33.792 49.5963 34.2418 49.5963 34.699C49.5963 35.1563 49.4801 35.6061 49.2588 36.0062C49.0374 36.4063 48.718 36.7436 48.3306 36.9865L29.7389 48.1165C29.3263 48.366 28.8537 48.4987 28.3716 48.5005Z"
            />
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
