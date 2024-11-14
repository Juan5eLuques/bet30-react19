'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';
import { TagComponent } from '@/types/tagComponent';
import { Horse, SquareLogo, Cube, Club, Diamond, Spade, PokerChip, Brandy, Fire, Flower, NumberCircleSeven, Rocket } from "phosphor-react";

interface Props {
    tag: TagComponent,
    index: number
    context: string
}

const urlTag = (tag: string, isActive: boolean) => {
    const color = isActive ? '#FFFFFF' : undefined; // Blanco si activo, color por defecto si no

    switch (tag) {
        case 'all':
            return <Fire size={24} weight="fill" color={color} />
        case 'favorites':
            return <Club size={24} weight="fill" color={color} />
        case 'top':
            return <Diamond size={24} weight="fill" color={color} />
        case 'new':
            return <Spade size={24} weight="fill" color={color} />
        case 'slot':
            return <PokerChip size={24} weight="fill" color={color} />
        case 'bingo':
            return <Brandy size={24} weight="fill" color={color} />
        case 'table':
            return <SquareLogo size={24} weight="fill" color={color} />
        case 'crash':
            return <Rocket size={24} weight="fill" color={color} />
        case 'lottery':
            return <Horse size={24} weight="fill" color={color} />
        case 'virtual':
            return <Cube size={24} weight="fill" color={color} />
        case 'videopoker':
            return <NumberCircleSeven size={24} weight="fill" color={color} />
        case 'instant':
            return <Flower size={24} weight="fill" color={color} />
        default:
            return <Flower size={24} weight="fill" color={color} />
    }
};

export const Tag = ({ tag, index, context }: Props) => {
    const pathname = usePathname();
    const isActive = pathname === `/${context}/games/tag/${tag.code}`;

    return (
        <Link
            key={tag.code}
            href={`/${context}/games/tag/${tag.code}`}
            className={`${isActive ? 'bg-wallet-gradient border border-[#046aff]' : 'border bg-[#030f2f] border-[rgb(18,33,75)] hover:border-[#030f2f]'} md:w-[100px] sm:h-[50px] flex justify-center items-center w-auto h-full flex-shrink-0 relative rounded-full overflow-hidden transition-all duration-300 snap-start group`}
        >
            <div className="w-full h-auto relative flex items-center justify-center px-3 py-2 md:p-2 text-nowrap scrollbar-none gap-2">
                {urlTag(tag.code, isActive)}
                <span className='text-sm'>{tag.name}</span>
            </div>
        </Link>
    )
}
