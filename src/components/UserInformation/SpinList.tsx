'use client'

import { Spin, SpinsCollection } from "@/types/Spins";
import { Transaction, TransactionsData } from "@/types/Transactions";
import { ConvertDate } from "@/utils/dateFunctions";
import { CaretRight } from "phosphor-react";
import { useEffect, useState } from "react";
import useSWR from "swr";

// Función para hacer fetch a la URL especificada
const fetcher = async (url: string): Promise<SpinsCollection> => {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Error al obtener las transacciones");
    return response.json();
};

export default function SpinsList() {

    // Estados para almacenar la URL actual, las transacciones, y las URLs de navegación
    const [currentUrl, setCurrentUrl] = useState<string | null>(`${process.env.NEXT_PUBLIC_API_URL}/api/user/spins`);
    const [spins, setSpins] = useState<Spin[]>([]);
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
            setSpins(data.spins);
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
            <h3 className="text-lg font-semibold text-[#5fa8d3]">Transacciones Recientes</h3>

            {/* Renderizar el estado de carga */}
            {isLoading && <p className="text-white">Cargando transacciones...</p>}

            {/* Renderizar error */}
            {error && <p className="text-red-500">Error al cargar las transacciones.</p>}

            {/* Lista de transacciones */}
            {spins.length > 0 ? (
                spins.map((spin) => (
                    <div key={spin.id} className="bg-[#030f2f] rounded-lg p-4 space-y-2 border border-[#021b79]">
                        <div className="flex justify-between items-center">
                            <span className={`px-2 py-1 text-xs font-semibold rounded ${spin.outcome === 2 || spin.outcome === 4 ? 'bg-[#16a34a] text-white' : 'bg-[#dc2626] text-white'
                                }`}>
                                {spin.outcome === 2 ? 'Ganada' : <></>}
                                {spin.outcome === 3 ? 'Perdida' : <></>}
                                {spin.outcome === 4 ? 'Reintegrada' : <></>}
                            </span>
                            <span className="text-sm font-medium text-[#5fa8d3]">#{spin.id}</span>
                        </div>
                        <div className="text-sm">
                            <p>{spin.name}</p>
                            <p>Tiempo de Spin: {ConvertDate(spin.created_at)}</p>
                            <p>Spin: ${spin.amount}</p>
                            {spin.balance_before !== '0.00' || spin.balance_after !== '0.00' ? <p className="font-medium text-[#5fa8d3] flex gap-2 items-center">${spin.balance_before} <CaretRight />{spin.balance_after}</p> : <></>}
                        </div>
                    </div>
                ))
            ) : (
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
