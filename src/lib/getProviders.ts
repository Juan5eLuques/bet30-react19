import { ListProviders } from "@/types/providers";

const API_URL = process.env.NEXT_PUBLIC_API_URL;


export async function getProviders(context : string): Promise<ListProviders> {
    try {
        const data = await fetch(`${API_URL}/api/${context}/nav/providers`);

        if (!data.ok) {
            throw new Error(`Error fetching providers: ${data.statusText}`);
        }

        const providers: ListProviders = await data.json();

        return providers;
    } catch (error) {
        console.error("Failed to fetch providers:", error);
        return []; // En caso de error, devuelve un arreglo vacío
    }
}
