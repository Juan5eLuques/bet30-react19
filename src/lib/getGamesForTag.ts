import { GamesCollection } from "@/types/gamesCollection";
import { GameList } from "@/types/gamesComponent";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getGamesForTag(tag : string): Promise<GamesCollection | null> {
    try {
        const data = await fetch(`${API_URL}/api/casino/games/tag/${tag}`);

        if (!data.ok) {
            throw new Error(`Error fetching providers: ${data.statusText}`);
        }

        const providers: GamesCollection = await data.json();

        return providers;
    } catch (error) {
        console.error("Failed to fetch providers:", error);
        return null // En caso de error, devuelve un arreglo vacío
    }
}
