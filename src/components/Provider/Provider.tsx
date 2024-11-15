'use client'

import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { ProviderComponent } from '@/types/providers'
import { usePathname } from 'next/navigation';

const NEXT_PUBLIC_CDN_BASE_URL = process.env.NEXT_PUBLIC_CDN_BASE_URL;

export const Provider = ({ name, code, gameCode, sortOrder, context }: ProviderComponent) => {

    const pathname = usePathname()
    return (
        <Link
            key={code}
            href={`/${context === 'home' ? 'casino' : context}/games/provider/${code}`}
            className={`${pathname === `/${context}/games/provider/${code}` ? 'bg-wallet-gradient border border-[#046aff]' : 'bg-[#030f2f]  border border-[rgb(18,33,75)] hover:border-[#030f2f]'} flex-shrink-0 relative rounded-full overflow-hidden transition-all duration-400 snap-start group`}
        >
            <div className="w-[80px] h-[40px] md:w-[100px] sm:h-[50px] relative flex items-center justify-center p-2 md:p-2">
                <Image
                    src={`${NEXT_PUBLIC_CDN_BASE_URL}/media/icons/providers-new/${code}.png`}
                    key={code}
                    alt={name}
                    width={70}
                    height={70}
                    className="max-w-full max-h-full object-contain transition-all duration-300"
                />
            </div>
        </Link>
    )
}

