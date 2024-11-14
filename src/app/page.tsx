import CategoriesBanner from "@/components/Banner/CategoriesBanner";
import GamesHome from "@/components/Games/GamesHome";
import Hero from "@/components/Hero/Hero";
import { ProviderIcon } from "@/components/Provider/ProviderIcon";
import ProviderSlider from "@/components/Provider/ProviderSlider";


export const dynamic = "force-dynamic";


export default function Home() {

  return (
    <div >
      <Hero isHome={true} />
      <main className="flex flex-col px-2 md:px-4 pb-3">
        <GamesHome />
        <CategoriesBanner />
        <ProviderSlider context="home" IconElement={<ProviderIcon />} />
      </main>
    </div >
  );
}
