'use client'

import React from "react";
import Logo from "../Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

import AccountModal from "../AccountModal";
import WalletComponent from "../Wallet";

interface NavProps {
  title: string;
  href: string;
  isActive: string;
}

const Navigation: React.FC = () => {

  const pathname = usePathname();

  // Función para verificar si la ruta actual está en el array de rutas
  const useIsPath = (path: string) => {
    return pathname.split("/")[1] == path
  };

  useIsPath('')
  const navItems: NavProps[] = [
    { title: "Home", href: "", isActive: '' },
    { title: "Slots", href: "casino/games/tag/all", isActive: 'casino' },
    { title: "Casino online", href: "live-casino/games/tag/all", isActive: 'live-casino' },
    { title: "Deportes", href: "sportsbook-ex", isActive: 'sportsbook-ex' },
  ];

  return (
    <div className="w-full min-h-16 bg-[#030f2f] flex justify-between items-center px-3 border-b-1 border-x-gray-500 sombras sticky top-0 z-10">
      <Logo />
      <ul className="relative gap-x-2 lg:gap-x-14 xl:gap-x-28 hidden md:flex items-center justify-center min-w-96">
        {navItems.map(({ title, href, isActive }) => (
          <li
            key={href}
            className={` ${useIsPath(isActive) ? 'bg-wallet-gradient text-white'
              : 'text-gray-300 hover:text-white hover:bg-[#030f2f]'} rounded-full px-4 py-2  flex justify-center items-center tracking-wide`}
          >
            <Link
              href={`/${href}`}
              className={`${useIsPath(href) ? "latido " : ""} no-underline px-2 text-md md:text-md`}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex gap-2">
        <WalletComponent />
        <AccountModal />
      </div>

      <style jsx>{`
        a {
          text-decoration: none;
        }

        .sombras {
          box-shadow: #0003 0 4px 6px -1px, #0000001f 0 2px 4px -1px;
        }

        @keyframes latido {
          0%,
          100% {
            transform: scale(1.05);
            filter: brightness(1) drop-shadow(0 0 0px #5fa8d3);
          }
          50% {
            transform: scale(1.05);
            filter: brightness(1.5) drop-shadow(0 0 15px #5fa8d3);
          }
        }

        .latido {
          animation: latido 1.5s ease-in-out 1;
        }

      `}</style>
    </div>
  );
};

export default Navigation;
