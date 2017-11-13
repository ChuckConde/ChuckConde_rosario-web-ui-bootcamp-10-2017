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
        character: {
            name: string;
            realm: string;
            battlegroup: string;
            class: number;
            race: number;
            gender: number;
            level: number;
            achievementPoints: number;
            thumbnail: string;
            spec?: {
                name: string;
                role: string;
                backgroundImage: string;
                icon: string;
                description: string;
                order: number;
            };
            guild: string;
            guildRealm: string;
            lastModified: number;
        }
        rank: number;
    }];
    emblem: {
        icon: number;
        iconColor: string;
        iconColorId: number;
        border: number;
        borderColor: string;
        borderColorId: number;
        backgroundColor: string;
        backgroundColorId: number;
    };
}
