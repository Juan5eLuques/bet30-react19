import { RootObject } from "@/types/gamesComponent";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getGamesHome(): Promise<RootObject> {
    try {
        const data = await fetch(`${API_URL}/api/home/games/home`);

        if (!data.ok) {
            throw new Error(`Error fetching games: ${data.statusText}`);
        }
        const result: RootObject = await data.json();

        return result;
    } catch (error) {
        console.error("Failed to fetch games:", error);
        return {} as RootObject; // En caso de error, devuelve un objeto vacío
    }
}
