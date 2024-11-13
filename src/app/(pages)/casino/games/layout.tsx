import Hero from "@/components/Hero/Hero";
import ProviderSlider from "@/components/Provider/ProviderSlider";
import Search from "@/components/Tag/Search";
import TagSlider from "@/components/Tag/TagSlider";
import { Suspense } from "react";

const Layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return <div>
        <Hero urlBanner="/images/banners/slots-banner.png" />
        <main className="flex flex-col px-2 md:px-4 py-2">
            <ProviderSlider showTitle={false} />
            <div className="flex flex-col xl:flex-row w-full flex-grow overflow-y-auto xl:items-center">
                <TagSlider />
                <Suspense fallback={<div>Loading</div>}>
                    <Search />
                </Suspense>
            </div>
            <Suspense fallback={<div>cargando</div>}>
                {children}
            </Suspense>
        </main></div>
}


export default Layout;