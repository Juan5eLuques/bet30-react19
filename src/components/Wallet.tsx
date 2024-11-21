'use client';

import React, { useEffect, useState } from "react";
import { Wallet } from "lucide-react";
import useSWR from "swr";
import { usePathname } from "next/navigation";
import { Balance } from "@/types/Balance";

function formatNumber(value: any, decimalPlaces = 2, decimalSeparator = ".", thousandSeparator = ",") {
  if (isNaN(value)) {
    throw new Error("El valor proporcionado no es un número válido.");
  }

  const number = parseFloat(value);
  const fixedNumber = number.toFixed(decimalPlaces);
  const [integerPart, decimalPart] = fixedNumber.split(".");
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, thousandSeparator);
  return decimalPart ? `${formattedInteger}${decimalSeparator}${decimalPart}` : formattedInteger;
}

const fetcher = async (url: string): Promise<Balance> => {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Error al obtener las transacciones");
  return response.json();
};

const WalletComponent: React.FC = () => {
  const pathname = usePathname(); // Hook para obtener la ruta actual

  // Función para obtener el primer segmento del pathname
  const getBasePath = (path: string) => {
    const segments = path.split("/").filter(Boolean); // Divide por "/" y elimina segmentos vacíos
    return segments.length > 0 ? `/${segments[0]}` : "/";
  };

  const [basePath, setBasePath] = useState(getBasePath(pathname));

  const { data, error, isLoading, mutate } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/api/user/balance`,
    fetcher,
    {
      keepPreviousData: true,
      revalidateOnFocus: true,
      revalidateIfStale: true,
      dedupingInterval: 10000,
    }
  );

  const [balance, setBalance] = useState<number>();

  // Actualiza el balance al recibir nuevos datos
  useEffect(() => {
    if (data) {
      setBalance(data.message);
    }
  }, [data]);

  // Verifica si el basePath ha cambiado y fuerza revalidación
  useEffect(() => {
    const newBasePath = getBasePath(pathname);
    if (newBasePath !== basePath) {
      setBasePath(newBasePath);
      mutate(); // Fuerza un nuevo fetch
    }
  }, [pathname, basePath, mutate]);

  return (
    <div className="flex items-center gap-2 rounded-full px-4 py-2 transition-colors bg-wallet-gradient cursor-pointer">
      {/* Estado de carga */}
      {isLoading && (
        <div className="pr-2 flex justify-center items-center gap-2">
          <Wallet className="w-4 h-4 text-[white] bg-wallet" />
          <span className="w-16 bg-transparent">Cargando...</span>
        </div>
      )}

      {/* Error */}
      {error && <p className="text-red-500">Error al cargar el balance.</p>}

      {/* Balance */}
      {balance ? (
        <div className="flex justify-center items-center gap-2">
          <Wallet className="w-4 h-4 text-[white] bg-wallet" />
          <span className="text-[white] font-medium ">${formatNumber(balance)}</span>
        </div>
      ) : null}
    </div>
  );
};

export default WalletComponent;
