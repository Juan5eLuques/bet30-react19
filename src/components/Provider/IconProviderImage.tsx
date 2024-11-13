import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  url: string;
  href: string;
}

const IconProviderImage: React.FC<Props> = ({ url, href }) => {
  return (
    <Link
      className="cursor-pointer flex gap-2 items-center justify-center rounded-3xl h-10"
      href={href}
    >
      <Image src={url}
        width={50}       // Puedes ajustar este valor como base
        height={50}      // o dejarlo aquí para mantener la relación de aspecto
        layout="intrinsic" // Ajusta el tamaño de la imagen manteniendo la calidad
        className="provider-image"
        alt="Provider Logo" />
    </Link>
  );
};

export default IconProviderImage;
