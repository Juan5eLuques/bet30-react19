import Hero from "@/components/Hero/Hero";
import ProviderSlider from "@/components/Provider/ProviderSlider";
import Search from "@/components/Tag/Search";
import TagSlider from "@/components/Tag/TagSlider";

export default async function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return <div>
        <Hero urlBanner="/images/banners/slots-banner.png" />
        <main className="flex flex-col px-2 md:px-4 py-2">
            <ProviderSlider showTitle={false} context="casino" />
            <div className="flex flex-col md:flex-row xl:w-full scrollbar-thin flex-grow overflow-y-auto xl:items-center">
                <TagSlider context="casino" />
                <Search />
            </div>
            {children}
        </main>
    </div>
}


