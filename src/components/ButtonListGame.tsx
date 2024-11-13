import { FC, ReactNode } from "react";

interface Props {
  titleButton: string;
  iconSVG: string;
  href: string;
  children?: ReactNode;
}

const ButtonListGame: FC<Props> = ({ titleButton, iconSVG, href, children }) => {
  return (
    <section className="flex w-full justify-between flex-col mt-4 mb-4">
      <div className="flex w-full justify-between md:pt-2 md:pb-2">
        <span className="font-bold text-lg md:text-xl flex items-center justify-start gap-2 text-white cursor-default">
          <svg name={iconSVG} fill="white" />
          {titleButton}
        </span>
        <a href={href}>
          <button className="px-3 py-1 rounded-full shadow-xl">Ver mas</button>
        </a>
      </div>
      <div className="w-12 mt-2 border-b-2 border-y-[#1475e1] mb-4"></div>
      <div className="grid grid-cols-3 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-6 xl:grid-cols-6">
        {children}
      </div>
    </section>
  );
};


export default ButtonListGame;
