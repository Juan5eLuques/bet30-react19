import { HomeIcon, TvIcon, Gamepad2Icon, DicesIcon, CrownIcon, RocketIcon } from "lucide-react";
import Search from "./Search"

const navItems = [
    { label: "Lobby", icon: HomeIcon },
    { label: "Originales de Stake", icon: CrownIcon },
    { label: "Slots", icon: Gamepad2Icon },
    { label: "Casino en Vivo", icon: DicesIcon },
    { label: "Concursos de TV", icon: TvIcon },
    { label: "Exclusivos de Stake", icon: CrownIcon },
    { label: "Lanzamientos", icon: RocketIcon },
];

export function Tags() {
    return (
        <div className="w-full bg-[#0B1A2D]">
            <div className="w-fulll px-4">
                <div className="flex flex-col">
                    <div className="py-4">
                        <Search />
                    </div>

                    <nav className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
                        {navItems.map((item) => (
                            <button
                                key={item.label}
                                className="flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#1A2C42] hover:bg-[#243757] text-gray-300 hover:text-white transition-all duration-200 whitespace-nowrap"
                            >
                                <item.icon className="w-4 h-4" />
                                <span className="text-sm font-medium">{item.label}</span>
                            </button>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    );
}