"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const GamePage = () => {
    const pathname = usePathname();

    // Extraer los segmentos dinámicos de la URL
    const segments = pathname.split("/").filter(Boolean); // Divide por "/" y elimina elementos vacíos
    const gameId = segments[1]; // El segundo segmento (índice 1) corresponde al "2"
    const gameSlug = segments[2]; // El tercer segmento (índice 2) corresponde al "pp--vs5joker"

    useEffect(() => {

        async function GameCall() {
            await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/casino/games/url/${gameId}/${gameSlug}`)
        }

        GameCall()
    }, [])

    return (
        <></>
    );
};

export default GamePage;
