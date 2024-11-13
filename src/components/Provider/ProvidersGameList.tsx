import React from 'react';

const ProvidersGameList: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            <ul className="w-full flex gap-1 pt-1 pb-1 flex-grow overflow-y-auto scrollbar-none scrollbar-track-transparent md:scrollbar-thin scrollbar-thumb-[#233] scrollbar-corner-transparent md:gap-4 md:pb-4 md:py-4">
                {children}
            </ul>
            <style jsx>{`
                .scroll-custom {
                    scrollbar-width: thin;
                    scrollbar-color: #9b39a7 transparent; /* Asegúrate de que el color de fondo también esté configurado */
                }
            `}</style>
        </div>
    );
};

export default ProvidersGameList;
