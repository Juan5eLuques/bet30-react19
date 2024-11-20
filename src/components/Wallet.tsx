'use client'

import React, { useEffect, useState } from "react";
import { Wallet } from "lucide-react";
import useSWR from "swr";
import { Balance } from "@/types/Balance";

function formatNumber(value: any, decimalPlaces = 2, decimalSeparator = ".", thousandSeparator = ",") {
  if (isNaN(value)) {
    throw new Error("El valor proporcionado no es un número válido.");
  }

  // Asegurar que el valor es un número
  const number = parseFloat(value);

  // Formatear el número con los decimales
  const fixedNumber = number.toFixed(decimalPlaces);

  // Separar la parte entera y decimal
  const [integerPart, decimalPart] = fixedNumber.split(".");

  // Agregar separadores de miles a la parte entera
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, thousandSeparator);

  // Reconstruir el número con la parte decimal (si corresponde)
  return decimalPart ? `${formattedInteger}${decimalSeparator}${decimalPart}` : formattedInteger;
}


const fetcher = async (url: string): Promise<Balance> => {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Error al obtener las transacciones");
  return response.json();
};


const WalletComponent: React.FC = () => {




  const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/user/balance`, fetcher, {
    keepPreviousData: true,
    revalidateOnFocus: false,
    revalidateIfStale: true,
    dedupingInterval: 10000,
  });


  const [balance, setBalance] = useState<number>()

  useEffect(() => {
    if (data) {
      setBalance(data.message);
    }
  }, [data]);


  return (



    <div className="flex items-center gap-2 rounded-full px-4 py-2 transition-colors bg-wallet-gradient cursor-pointer">
      {/* Renderizar el estado de carga */}
      {isLoading && <Wallet className="w-4 h-4 text-[white] bg-wallet" /> && <span className="w-16 bg-transparent"> Cargando... </span>}

      {/* Renderizar error */}
      {error && <p className="text-red-500">Error al cargar las transacciones.</p>}

      {balance ? <span className="text-[white] font-medium">${formatNumber(balance)}</span> : <></>}
    </div>
  );
};

export default WalletComponent;
