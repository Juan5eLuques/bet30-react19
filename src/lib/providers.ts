import { RootObject } from "@/types/gamesComponent";
import { Provider } from "@/types/providers";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

type ListProviders = Provider[]

export async function getNameProviders() : Promise<ListProviders | null > {
    try{
        const providers: ListProviders = await fetch(`${API_URL}/api/home/nav/providers`).then(results => results.json())
        return providers;
    }
    catch (e){
        console.log(e)
        return null; 
    }
}