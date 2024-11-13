'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SearchIcon } from 'lucide-react';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState(''); // Estado para el valor de búsqueda
    const router = useRouter();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault(); // Prevenir el comportamiento de submit del formulario
        if (searchQuery.trim()) {
            router.push(`/casino/games/search/${encodeURIComponent(searchQuery)}`);
        }
    };

    return (
        <div className="flex py-1 w-full xl:ml-4">
            <form onSubmit={handleSearch} className="flex w-full gap-x-1">
                <div className="flex rounded-full bg-[#0a1761] w-3/4 xl:w-full items-center py-2 overflow-hidden">
                    <SearchIcon name="search" className="ml-2" />
                    <input
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Busqueda"
                        className="pl-2 flex items-center justify-center bg-[#0a1761] outline-none w-full text-sm"
                    />
                </div>
                <button type="submit" className="rounded-full px-4 py-2 w-1/4 xl:hidden xl:w-full">
                    Buscar
                </button>
            </form>
            <style jsx>{`
                button {
                    background: #0575e6;
                    background: linear-gradient(to right, #021b79, #0575e6);
                }
            `}</style>
        </div>
    );
};

export default Search;
