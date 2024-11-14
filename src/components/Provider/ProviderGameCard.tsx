import React, { useEffect } from 'react';

interface Props {
    title: string;
    svgName: string;
    href: string;
}

const ProviderGameCard: React.FC<Props> = ({ title, svgName, href }) => {

    return (
        <a className="cursor-pointer" href={href}>
            <button className="gap-2 items-center justify-center rounded-3xl h-10">
                {/* Aquí reemplaza el componente Icon con un <img> o similar para mostrar tu SVG */}
                <img
                    src={svgName} // Ajusta esta ruta según donde guardes tus iconos SVG
                    alt={title}
                    className="w-6 h-6 md:w-8 md:h-8"
                    style={{
                        fill: 'rgba(255,255,255,.5)',
                        color: 'rgba(255,255,255,.5)',
                    }}
                />
                <span className="whitespace-nowrap">{title}</span>
            </button>
        </a>
    );
};

export default ProviderGameCard;
