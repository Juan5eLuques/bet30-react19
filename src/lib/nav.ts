'use server'

export interface Nav {
  href : string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchNavItems = async(): Promise<Nav[]> => {
    try {
      const response = await fetch(`${API_URL}/api/home/nav/main`);
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  }
  