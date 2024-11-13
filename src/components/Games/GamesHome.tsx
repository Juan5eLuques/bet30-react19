import React from 'react';
import GamesHomeSection from './GamesHomeSection';
import { RootObject } from '@/types/gamesComponent';
import { getGamesHome } from '@/lib/gamesHome';

const games: RootObject = await getGamesHome();

export default async function GamesHome() {
    return (
        <section className="flex w-full justify-between flex-col mb-2">
            {Object.entries(games).map(([groupName, gameList], index) => (
                <GamesHomeSection key={groupName} hrefSection={`casino/games/tag/top`} nameSection={groupName} gameList={gameList} index={index}></GamesHomeSection>
            ))}
        </section>
    );
};
