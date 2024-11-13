import React from 'react';

interface Props {
    urlBg: string;
    text: string;
}

const ItemBanner: React.FC<Props> = ({ urlBg, text }) => {
    return (
        <div className="w-full h-auto relative flex justify-center hover:scale-105">
            <img src={urlBg} className="w-full h-full rounded-lg" alt={text} />
            <span className="absolute bottom-0 text-lg text-border">{text}</span>
        </div>
    );
};

export default ItemBanner;
