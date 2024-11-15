'use client'

import { Transaction, TransactionsData } from "@/types/Transactions";
import { CaretRight } from "phosphor-react";
import { useEffect, useState } from "react";
import useSWR from "swr";

// Función para hacer fetch a la URL especificada
const fetcher = async (url: string): Promise<TransactionsData> => {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Error al obtener las transacciones");
    return response.json();
};

// Función para convertir el tipo de transacción en texto
const TypeTransaction = (type: number) => {
    switch (type) {
        case 1: return 'Deposito';
        case 2: return 'Retiro';
        case 3: return 'Bonus';
        case 4: return 'Transferencia';
        default: return 'Desconocido';
    }
};

export default function TransactionList() {

    // Estados para almacenar la URL actual, las transacciones, y las URLs de navegación
    const [currentUrl, setCurrentUrl] = useState<string | null>(`${process.env.NEXT_PUBLIC_API_URL}/api/user/transactions`);
    const [transactions, setTransactions] = useState<Transaction[]>([]);
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
            setTransactions(data.transactions);
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
            {transactions.length > 0 ? (
                transactions.map((transaction) => (
                    <div key={transaction.id} className="bg-[#030f2f] rounded-lg p-4 flex items-center justify-between border border-[#021b79]">
                        <div className="flex items-center space-x-4">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${transaction.transaction_type === 4 ? 'bg-[#22c55e]' : 'bg-red-500'}`}>
                                {transaction.transaction_type === 1 ? (
                                    <span className="text-white text-lg">+</span>
                                ) : (
                                    <span className="text-white text-lg">-</span>
                                )}
                            </div>
                            <div>
                                <p className="font-medium text-[#5fa8d3]">{TypeTransaction(transaction.transaction_type)} <br /> #{transaction.id}</p>
                                <p className="text-sm text-white">
                                    Monto: ${transaction.amount}
                                </p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="font-medium text-[#5fa8d3] flex gap-2 justify-center items-center">${transaction.balance_before} <CaretRight />{transaction.balance_after}</p>
                            <p className="text-sm text-white">{transaction.created_at}</p>
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
