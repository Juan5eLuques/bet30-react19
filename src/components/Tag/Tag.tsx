'use client';

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { TagComponent } from '@/types/tagComponent';
import {
    SquareLogo, Cube, Diamond, Fire, Flower,
    Rocket, Lightning,
    Heart,
    Coins,
    Bell,
    Club,
    PokerChip,
    Coin
} from "phosphor-react";
import { Cherry, Spade } from 'lucide-react';

interface Props {
    tag: TagComponent;
    index: number;
    context: string;
}

interface IconTagProps {
    tag: string;
    isActive: boolean;
}

type IconKey =
    | 'all'
    | 'favorites'
    | 'top'
    | 'new'
    | 'slot'
    | 'bingo'
    | 'table'
    | 'crash'
    | 'lottery'
    | 'virtual'
    | 'videopoker'
    | 'instant'
    | 'roulette'
    | 'baccarat'
    | 'blackjack'
    | 'poker';

const ICONS: Record<IconKey, React.ElementType> = {
    all: Fire,
    favorites: Heart,
    top: Diamond,
    new: Lightning,
    slot: Cherry,
    bingo: Bell,
    table: SquareLogo,
    crash: Rocket,
    lottery: Coins,
    virtual: Cube,
    videopoker: Club,
    instant: Flower,
    baccarat: Spade,
    blackjack: Diamond,
    poker: Coin,
    roulette: PokerChip
};

const IconTag: React.FC<IconTagProps> = ({ tag, isActive }) => {
    const IconComponent = ICONS[tag as IconKey] || Flower; // Asegura que solo se usen claves válidas
    const color = isActive ? 'white' : '#b1bad3'; // Cambia el color del ícono activo
    const weight = isActive ? "duotone" : 'regular'
    const size = tag === 'slot' ? 23 : 24

    return <IconComponent size={size} weight={weight} color={color} />;
};

export const Tag = ({ tag, index, context }: Props) => {
    const pathname = usePathname();
    const isActive = pathname === `/${context}/games/tag/${tag.code}`;

    return (
        <Link
            key={tag.code}
            href={`/${context}/games/tag/${tag.code}`}
            className={`${isActive ? 'bg-wallet-gradient border border-[#046aff]' : 'border bg-[#030f2f] border-[rgb(18,33,75)] hover:border-[#030f2f]'
                } sm:h-[50px] flex justify-center items-center w-auto h-full flex-shrink-0 relative rounded-full overflow-hidden transition-all duration-300 snap-start group`}
        >
            <div className="w-full h-auto relative flex items-center justify-center px-3 py-2 md:p-2 text-nowrap scrollbar-none gap-2">
                <IconTag tag={tag.code} isActive={isActive} />
                <span className="text-sm">{tag.name}</span>
            </div>
        </Link>
    );
};

export const TagList = ({ tags, context }: { tags: TagComponent[]; context: string }) => {
    return (
        <div className="flex flex-wrap gap-4">
            {tags.map((tag, index) => (
                <Tag key={tag.code} tag={tag} index={index} context={context} />
            ))}

        </div>
    );
};
