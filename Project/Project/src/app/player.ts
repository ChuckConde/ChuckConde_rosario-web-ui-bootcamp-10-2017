export interface Player {
    lastModified?: number;
    name: string;
    realm: string;
    battlegroup: string;
    class: number;
    race: number;
    gender: number;
    level: number;
    achievementPoints: number;
    thumbnail: string;
    spec?: Object;
    calcClass?: string;
    faction?: number;
    guild?: Object;
    items?: any;
    stats?: Object;
    pvp?: any;
    totalHonorableKills?: number;
}
