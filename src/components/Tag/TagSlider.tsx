import { getTags } from '@/lib/getTags';
import React from 'react';
import { Tag } from './Tag';

export async function TagSlider() {

    const data = await getTags();

    // Verificar si data es null
    if (data === null) {
        // Manejo del caso en que data es null
        console.error("Error: Tags data is null");
        return data; // o algún valor predeterminado o fallback
    }

    // Ahora puedes utilizar Object.entries de forma segura
    const tagArray = Object.entries(data).map(([code, name]) => ({ code, name }));



    return (
        <div className="py-1">
            <div className="scrollbar-none flex gap-1 pt-1 sm:gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-thin scrollbar-track-purple-900/10 scrollbar-thumb-purple-600/50 hover:scrollbar-thumb-purple-600/70">
                {tagArray.map((tag, index) => (
                    <Tag index={index} tag={tag} key={tag.code}></Tag>
                ))}
            </div>
        </div>
    );
};

export default TagSlider;






