import { Player } from './player';
import { Emblem } from './emblem';
export interface Guild {
    lastModified: number;
    name: string;
    realm: string;
    battlegroup: string;
    level: number;
    side: number;
    achievementPoints: number;
    members:
    [{
        Player;
        rank: number;
    }];
    emblem: {
        Emblem;
    };
}
