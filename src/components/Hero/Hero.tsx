import React from "react";

interface Props {
    isHome?: boolean;
    urlBanner?: string;
}


const Hero: React.FC<Props> = ({ isHome = false, urlBanner = '/images/banners/banner-home.png' }) => {
    return (
        <div className="w-full bg-cover mb-2">
            {isHome ?
                <div className="w-full bg-cover mb-2">
                    <video
                        src="/bet30-banner.webm"
                        autoPlay
                        muted
                        loop
                        className="w-full h-auto block shadow-[#001345] shadow-lg md:hidden"
                    />
                    <img
                        src={urlBanner}
                        className="w-full hidden md:flex bg-cover object-top h-52 md:h-96"
                        alt="Hero"
                    />
                </div>
                : <img
                    src={urlBanner}
                    className="w-full bg-cover object-top h-40 md:h-96"
                    alt="Hero"
                />}
        </div>
    );
};

export default Hero;
