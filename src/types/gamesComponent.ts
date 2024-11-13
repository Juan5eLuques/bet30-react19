export interface RootObject {
    "Top Slots": GameList[],
    "Pragmatic Play": GameList[],
    "Ruby Play": GameList[],
    "Casino En Vivo": GameList[],
}
export interface GameList {
    id: number;
    published: number;
    name: string;
    code: string;
    launch_code: string;
    thumbnail: string;
    game_type: string;
    platforms: Platforms;
    has_demo: number;
    provider_id: number;
    sort_order: number;
    created_at: string;
    updated_at: string;
    provider: Provider;
}
export interface Provider {
    id: number;
    published: number;
    name: string;
    code: string;
    aggregator_id: number;
    game_count: number;
    sort_order: number;
    created_at: string;
    updated_at: string;
}
export interface Platforms {
    mobile: boolean;
    desktop: boolean;
}
