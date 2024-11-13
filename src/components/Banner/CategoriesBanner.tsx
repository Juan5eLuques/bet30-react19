import React from 'react';
import ItemBanner from './ItemBanner'; // Asegúrate de ajustar la ruta según la ubicación de tu componente ItemBanner
import Link from 'next/link';

export default async function CategoriesBanner() {
    return (
        <div>
            <h2 className="text-center text-lg my-2 md:hidden">
                ¡ Juga con nosotros !
            </h2>
            <div className="grid grid-cols-3 text-white gap-3 py-4 md:hidden">
                <Link href="/sportsbook-ex">
                    <ItemBanner
                        urlBg="/images/categories-banner/sports.png"
                        text="Deportes"
                    />
                </Link>
                <Link href="/casino/games/tag/all/">
                    <ItemBanner
                        urlBg="/images/categories-banner/slots.png"
                        text="Slots"
                    />
                </Link>
                <Link href="/live-casino">
                    <ItemBanner
                        urlBg="/images/categories-banner/live.png"
                        text="En vivo"
                    />
                </Link>
            </div>
        </div>
    );
};

