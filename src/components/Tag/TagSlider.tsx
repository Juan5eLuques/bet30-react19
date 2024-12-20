import { getTags } from '@/lib/getTags';
import React from 'react';
import { Tag } from './Tag';

interface ProviderSliderProps {
    context: 'home' | 'casino' | 'live-casino'
}


export async function TagSlider({ context }: ProviderSliderProps) {

    const data = await getTags(context);

    // Verificar si data es null
    if (data === null) {
        // Manejo del caso en que data es null
        console.error("Error: Tags data is null");
        return data; // o algún valor predeterminado o fallback
    }

    // Ahora puedes utilizar Object.entries de forma segura
    const tagArray = Object.entries(data).map(([code, name]) => ({ code, name }));



    return (
        <div className="py-1 w-full">
            <div className="flex gap-1 pt-1 sm:gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none md:scrollbar-visible md:scrollbar-thin md:scrollbar-track-purple-900/10 md:scrollbar-thumb-purple-600/50 hover:scrollbar-thumb-purple-600/70 ">
                {tagArray.map((tag, index) => (
                    <Tag context={context} index={index} tag={tag} key={tag.code}></Tag>
                ))}
            </div>
        </div>
    );
};

export default TagSlider;






