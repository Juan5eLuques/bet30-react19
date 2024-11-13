import { Tags } from "@/types/tags";

type ListTags = Tags;

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getTags(): Promise<ListTags | null > {
    try {
        const response = await fetch(`${API_URL}/api/casino/nav/tags`);
        if (!response.ok) {
            throw new Error(`Error fetching tags: ${response.statusText}`);
        }
        
        const tagsData: ListTags = await response.json();
        return tagsData;
    } catch (error) {
        console.error("Failed to fetch tags data:", error);
        return null; // Retorna un array vacío en caso de fallo para evitar que el build se detenga
    }
}
