"use client";

import React from 'react';
import Card from '../Card';
import { Games } from '@/types/gamesCollection';

interface Props {
    gameList: Games[] | null | undefined;
    isLoading: boolean; // Prop para manejar el estado de carga
}

export default function GamesList({ gameList, isLoading }: Props) {
    return (
        <div className="grid grid-cols-3 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-6 xl:grid-cols-8 py-2">
            {isLoading ? (
                // Mostrar Skeletons mientras se cargan los datos
                Array.from({ length: 36 }).map((_, index) => (
                    <SkeletonCard key={index} />
                ))
            ) : (
                // Mostrar los juegos reales cuando estén disponibles
                gameList?.map((game, index) => (
                    <div key={index}>
                        <Card
                            href={`/game/${game.provider.aggregator_id}/${game.launch_code}`}
                            title={game.name}
                            src={`https://a7a.nyc3.cdn.digitaloceanspaces.com/userFiles/games.a7a.club/${game.thumbnail}`}
                        />
                    </div>
                ))
            )}

        </div>
    );
}

// Componente Skeleton para simular las Cards en carga

function SkeletonCard() {
    return (
        <div className="h-full shadow-sm overflow-hidden flex flex-col justify-center cursor-pointer rounded-xl relative group animate-pulse">
            <div className="overflow-hidden flex justify-center items-center relative rounded-xl div-image-container bg-[#00113f] w-full h-28 xl:h-40 2xl:h-48">
                {/* Simulación del SVG de Play en estado de carga */}
                <div className="absolute w-18 h-10 bg-gray-400 rounded-full opacity-50"></div>
            </div>
            <p className="font-thin text-xs text-gray-400 md:p-2 md:text-sm py-2 text-center whitespace-nowrap overflow-hidden text-ellipsis bg-transparent w-3/4 mx-auto rounded">
                Cargando...
            </p>
        </div>
    );
}
