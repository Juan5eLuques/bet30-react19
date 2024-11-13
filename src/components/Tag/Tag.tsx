'use client'

import Link from 'next/link'
import React from 'react'
import { Activity, Crown, Dice4, Gem, Star } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { TagComponent } from '@/types/tagComponent';

interface Props {
    tag: TagComponent,
    index: number
}

const urlTag = (index: number) => {
    switch (index) {
        case 0:
            return <Crown></Crown>
        case 1:
            return <Star></Star>
        case 2:
            return <Activity />
        case 3:
            return <Gem></Gem >
        case 4:
            return <Dice4 />
        case 5:
            return <Activity />
        case 6:
            return <Gem></Gem>
        default: return <Crown></Crown>
    }
};

export const Tag = ({ tag, index }: Props) => {

    const pathname = usePathname()

    return (
        <Link
            key={tag.code}
            href={`/casino/games/tag/${tag.code}`}
            className={`${pathname === `/casino/games/tag/${tag.code}` ? 'bg-wallet-gradient border border-[#046aff]' : 'border bg-[#030f2f] border-[rgb(18,33,75)] hover:border-[#030f2f]'} w-auto h-full flex-shrink-0 relative  rounded-full overflow-hidden  transition-all duration-300 snap-start group`}
        >
            <div className="w-full h-auto relative flex items-center justify-center px-3 py-2 md:p-2 text-nowrap scrollbar-none gap-2">
                {/* <Image
            src={urlTag(index)}
            key={tag.code}
            alt={tag.name}
            width={70}
            height={70}
            className="h-6 w-6 object-contain transition-all duration-300 "
        /> */}
                {urlTag(index)}
                <span className='text-sm'>{tag.name}</span>
            </div>
        </Link>
    )
}
