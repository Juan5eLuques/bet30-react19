'use client'

import { Bet, BetsCollection } from "@/types/Bets";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { LabelResult } from "./LabelResult";
import { ConvertDate } from "@/utils/dateFunctions";
import { SoccerSvg } from "../Svgs/SoccerSvg";

// Función para hacer fetch a la URL especificada
const fetcher = async (url: string): Promise<BetsCollection> => {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Error al obtener las transacciones");
    return response.json();
};

export default function BetList() {

    // Estados para almacenar la URL actual, las transacciones, y las URLs de navegación
    const [currentUrl, setCurrentUrl] = useState<string | null>(`${process.env.NEXT_PUBLIC_API_URL}/api/user/external-bets`);
    const [bets, setBets] = useState<Bet[]>([]);
    const [nextUrl, setNextUrl] = useState<string | null>(null);
    const [prevUrl, setPrevUrl] = useState<string | null>(null);

    // Llamada a SWR para manejar el fetch de datos
    const { data, error, isLoading } = useSWR(currentUrl, fetcher, {
        keepPreviousData: true,
        revalidateOnFocus: false,
        revalidateIfStale: true,
        dedupingInterval: 10000,
    });

    // Actualiza las transacciones y URLs de navegación cuando se reciben nuevos datos
    useEffect(() => {
        if (data) {
            setBets(data.bets);
            setNextUrl(data.nextPage);
            setPrevUrl(data.previousPage);
        }
    }, [data]);

    // Manejadores de cambio de página
    const handleNextPage = () => {
        if (nextUrl) setCurrentUrl(nextUrl);
    };

    const handlePrevPage = () => {
        if (prevUrl) setCurrentUrl(prevUrl);
    };

    return (
        <div className="mt-4 space-y-4">
            <h3 className="text-lg font-semibold text-[#5fa8d3]">Últimas Apuestas</h3>

            {/* Renderizar el estado de carga */}
            {isLoading && <p className="text-white">Cargando transacciones...</p>}

            {/* Renderizar error */}
            {error && <p className="text-red-500">Error al cargar las transacciones.</p>}

            {/* Lista de transacciones */}
            {bets.length > 0 ? (
                bets.map((bet) => (
                    <div key={bet.id} className="bg-[#030f2f] rounded-lg p-4 space-y-2 border border-[#021b79]">
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-2">
                                <span className={`px-2 py-1 text-xs font-semibold rounded ${bet.straight_parlay === 2 ? 'bg-[#0575e6] text-white' : 'bg-[#021b79] text-[#5fa8d3]'
                                    }`}>
                                    {bet.straight_parlay === 2 ? 'Combinada' : 'Normal'}
                                </span>
                                <span className={`px-2 py-1 text-xs font-semibold rounded ${bet.outcome === 2 ? 'bg-green-600 text-white' : 'bg-[#dc2626] text-white'
                                    }`}>
                                    {bet.outcome === 2 ? 'Ganada' : 'Perdida'}
                                </span>
                            </div>
                            <span className="text-sm font-medium text-[#5fa8d3]">#{bet.id}</span>
                        </div>
                        <div className="text-sm">
                            <p>Cuota({bet.line})</p>
                            <p>Tiempo de Apuesta: {ConvertDate(bet.created_at)}</p>
                            <p>Monto: ${bet.amount}</p>
                            {bet.outcome === 3 ? <p>Cantidad Perdida: ${bet.amount}</p> : <p>Cantidad Ganada: ${bet.amount}</p>}

                        </div>
                        <div className="space-y-2">
                            {bet.sub_bets.map((match, index) => (
                                <div key={index} className="bg-[#021b79] p-2 rounded">
                                    <LabelResult outcome={match.outcome} />
                                    <div className="text-sm flex gap-1 items-center"> <SoccerSvg />{match.full_data.team1Name} <b>VS</b>  {match.full_data.team2Name}</div>
                                    <div className="text-xs text-[#5fa8d3]">Hora de Inicio: {ConvertDate(match.created_at)}</div>
                                    <div className="text-sm font-medium">{match.market_name} {match.handicap_meta} ({match.line})</div>
                                </div>
                            ))}
                        </div>
                    </div>
                )))
                : (
                    !isLoading && <p className="text-white">No hay transacciones disponibles.</p>
                )}

            {/* Botones de navegación */}
            <div className="flex justify-between mt-4">
                <button
                    onClick={handlePrevPage}
                    disabled={!prevUrl}
                    className={`px-4 py-2 rounded bg-[#021b79] text-white ${!prevUrl ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#046aff]'}`}
                >
                    Prev
                </button>
                <button
                    onClick={handleNextPage}
                    disabled={!nextUrl}
                    className={`px-4 py-2 rounded bg-[#021b79] text-white ${!nextUrl ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#046aff]'}`}
                >
                    Next
                </button>
            </div>
        </div>
    );
}
