import { GamesCollection } from "@/types/gamesCollection";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getGamesForProvider(provider : string, page :number): Promise<GamesCollection | null > {
    try {
        const data = await fetch(`${API_URL}/api/casino/games/provider/${provider}?page=${page}`);
        
        if (!data.ok) {
            throw new Error(`Error fetching providers: ${data.statusText}`);   
        }
        
        const providers: GamesCollection = await data.json();
        
        return providers;
    } catch (error) {
        return null; // En caso de error, devuelve un arreglo vacío
    }
}

