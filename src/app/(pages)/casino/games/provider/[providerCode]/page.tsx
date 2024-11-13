"use client";

import ButtonVerMas from "@/components/Games/ButtonVerMas";
import GamesList from "@/components/Games/GamesList";
import { Games, GamesCollection } from "@/types/gamesCollection";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import useSWR from "swr";

// Fetcher para SWR con tipo adecuado
const fetcher = async (url: string): Promise<GamesCollection> => {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Error al obtener los juegos");
    return response.json();
};

export default function Page() {
    const pathname = usePathname();
    const pathSegments = pathname.split("/");
    const lastSegment = pathSegments[pathSegments.length - 1];

    const [page, setPage] = useState(0);
    const [games, setGames] = useState<Games[]>([]);
    const [hasMoreGames, setHasMoreGames] = useState(false);

    // Cambiar el proveedor al cambiar de segmento
    useEffect(() => {
        setGames([]); // Limpiar juegos previos
        setPage(0);   // Resetear la página
    }, [lastSegment]);

    // Generación de la URL para la llamada SWR
    const url = lastSegment
        ? `${process.env.NEXT_PUBLIC_API_URL}/api/casino/games/provider/${lastSegment}?page=${page}`
        : null;

    // Uso de SWR para obtener datos, guardando en cache
    const { data, error, isLoading } = useSWR(url, fetcher, {
        keepPreviousData: true,  // Mantener los datos anteriores mientras se cargan nuevos
        revalidateOnFocus: false, // Deshabilitar la revalidación al volver al foco (para evitar fetch innecesarios)
        revalidateIfStale: true,  // Revalidar si los datos son antiguos
        dedupingInterval: 10000,  // Evitar llamadas múltiples al mismo endpoint

    });

    // Si tenemos datos, actualizar el estado de juegos
    useEffect(() => {
        if (data) {
            setHasMoreGames(data.next_page_url !== null);
            setGames((prevGames) => (page === 0 ? data.data : [...prevGames, ...data.data]));
        }
    }, [data, page]);

    const handleChangePage = () => {
        setPage((prevPage) => prevPage + 1);
    };

    if (error) return <div>Error al cargar los juegos</div>;

    return (
        <div>
            <GamesList isLoading={isLoading} gameList={games} />
            {hasMoreGames && <ButtonVerMas callback={handleChangePage} />}
        </div>
    );
}
