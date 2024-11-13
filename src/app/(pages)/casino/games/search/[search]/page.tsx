"use client";

import GamesList from "@/components/Games/GamesList";
import { Games, GamesCollection } from "@/types/gamesCollection";
import { useParams, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import useSWR from "swr";

// Fetcher para SWR con tipo adecuado
const fetcher = async (url: string): Promise<Games[]> => {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Error al obtener los juegos");
    return response.json();
};

export default function Page() {
    const params = useParams<{ search: string }>()

    const pathname = usePathname();
    const pathSegments = pathname.split("/");
    const lastSegment = pathSegments[pathSegments.length - 1];

    const [games, setGames] = useState<Games[]>([]);


    // Cambiar el proveedor al cambiar de segmento
    useEffect(() => {
        setGames([]); // Limpiar juegos previos
    }, [lastSegment]);

    // Generación de la URL para la llamada SWR
    const url = lastSegment
        ? `${process.env.NEXT_PUBLIC_API_URL}/api/casino/games/search/${params.search}`
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
            setGames(data);
        }
    }, [data]);


    if (error) return <div>Error al cargar los juegos</div>;


    return (
        <div >
            <GamesList isLoading={isLoading} gameList={games} />
            {
                !isLoading && games.length === 0 ? (
                    <div className="flex flex-col justify-center items-center text-center min-h-full text-4xl break-words">
                        <div className="w-full px-4 py-2">
                            No se encontraron datos para "{params.search}"
                        </div>
                    </div>
                ) : (
                    <></>
                )
            }


        </div>
    );
}
