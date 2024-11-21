import Hero from "@/components/Hero/Hero";
import ProviderSlider from "@/components/Provider/ProviderSlider";
import Search from "@/components/Tag/Search";
import TagSlider from "@/components/Tag/TagSlider";

const Layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return <div>
        <Hero urlBanner="/images/banners/banner-home.png" />
        <main className="flex flex-col px-2 md:px-4 py-2">
            <ProviderSlider showTitle={false} context="live-casino" />
            <div className="flex flex-col xl:flex-row w-full flex-grow overflow-y-auto xl:items-center">
                <TagSlider context="live-casino" />
                <Search />
            </div>
            {children}
        </main></div>
}


export default Layout;