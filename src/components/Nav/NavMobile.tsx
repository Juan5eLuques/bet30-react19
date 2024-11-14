'use client'

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SportsSvg } from "../Svgs/SportsSvg";
import { HomeSvg } from "../Svgs/HomeSvg";
import { CasinoSvg } from "../Svgs/CasinoSvg";
import { LiveSvg } from "../Svgs/LiveSvg";
import { CrashSvg } from "../Svgs/CrashSvg";

interface NavProps {
    key?: number,
    title: string;
    href: string;
}
const BottomNavigation: React.FC = () => {

    const pathname = usePathname();

    // Función para verificar si la ruta actual está en el array de rutas
    const useIsPath = (path: string) => {
        return pathname.split("/")[1] == path
    };

    useIsPath('')

    return (
        <div className="min-h-16 flex bg-[#030f2f] fixed bottom-0 w-screen justify-between items-center px-1 md:hidden">
            <style jsx>{`
                a {
        text-decoration: none;
    }
    .border-top {
        box-shadow: inset 0 4px 0 0 #5fa8d3;
    }
    .menu-shadow {
        position: absolute;
        bottom: -6px; /* Ajusta según necesites */
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        width: 5rem; /* Ajusta según el ancho que necesites */
        height: 1rem; /* Ajusta según la altura que necesites */
        background: linear-gradient(
            to bottom,
            transparent,
            #4c1d95
        ); /* Cambia #4c1d95 al color que prefieras */
        border-radius: 0 0 0.5rem 0.5rem; /* Redondeo en la parte inferior */
    }

    @keyframes latido {
        0%,
        100% {
            transform: scale(1);
            filter: brightness(1) drop-shadow(0 0 0px #5fa8d3);
        }
        50% {
            transform: scale(1.1);
            filter: brightness(1.5) drop-shadow(0 0 15px #5fa8d3);
        }
    }

    .latido {
        animation: latido 1.5s ease-in-out 1; /* Se ejecuta una vez */
    }
            `}</style>
            <ul className="flex gap-5 justify-center items-center w-full h-full min-h-16">
                <li
                    className={`${useIsPath("casino") ? "border-top " : ""} w-20 flex justify-center items-center min-h-16`}
                >
                    <Link
                        href="/casino/games/tag/all"
                        className="cursor-pointer no-underline flex flex-col justify-center items-center"
                    >
                        <CasinoSvg
                            className={`${useIsPath("casino") ? 'latido text-[#5FA8D3]' : 'text-[#b1bad3]'}`}
                        />
                        <span className="text-sm">Casino</span>
                    </Link>
                </li>
                <li
                    className={`${useIsPath("sportsbook-ex") ? "border-top " : ""} w-20 flex justify-center items-center min-h-16`}
                >
                    <Link
                        href="/sportsbook-ex"
                        className="cursor-pointer no-underline flex flex-col justify-center items-center"
                    >
                        <SportsSvg
                            className={`${useIsPath("sportsbook-ex") ? 'latido text-[#5FA8D3]' : 'text-[#b1bad3]'}`}
                        />
                        <span className="text-sm">Sports</span>
                    </Link>
                </li>
                <li className={`w-20 flex justify-center items-center min-h-16 relative`}>
                    <img
                        src="/images/logoBet.png"
                        className={`${useIsPath("") ? "latido text-[#5FA8D3]" : ""} absolute -top-2`}
                    />
                    <Link
                        href="/"
                        className="cursor-pointer no-underline flex flex-col justify-between items-center"
                    >
                        <HomeSvg
                            className={`${useIsPath("") ? 'latido text-[#5FA8D3]' : 'text-[#b1bad3]'}`}
                        />
                        <span className="text-sm">Inicio</span>
                    </Link>
                </li>
                <li
                    className={`${useIsPath("live-casino") ? "border-top " : ""} w-20 flex justify-center items-center min-h-16`}
                >
                    <Link
                        href="/live-casino/games/tag/all"
                        className="cursor-pointer no-underline flex flex-col justify-center items-center"
                    >
                        <LiveSvg
                            className={`${useIsPath("live-casino") ? 'latido text-[#5FA8D3]' : 'text-[#b1bad3]'}`}
                        />
                        <span className="text-sm">Live</span>
                    </Link>
                </li>
                <li
                    className={`${useIsPath("casino/games/tag/crash") ? "border-top " : ""} w-20 flex justify-center items-center min-h-16`}
                >
                    <Link
                        href="/casino/games/tag/crash"
                        className="cursor-pointer no-underline flex flex-col justify-center items-center"
                    >
                        <CrashSvg
                            className={`${useIsPath("casino/games/tag/crash") ? 'latido text-[#5FA8D3]' : 'text-[#b1bad3]'}`}
                        />
                        <span className="text-sm">Crash</span>
                    </Link>
                </li>

            </ul>
        </div>
    );
};

export default BottomNavigation;


