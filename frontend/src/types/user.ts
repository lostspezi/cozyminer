export type User = {
    id: string;
    username: string;
    avatarUrl: string;
    email: string;
    playerProfile: PlayerProfile;
}

export type PlayerProfile = {
    current: number;
    currentXp: number;
    xpForNextLevel: number;
    missingXp: number;
    progressPercent: number;
    inventory: PlayerInventory;
};

export type PlayerInventory = {
    capacity: number;
    items: Record<ItemType, number>;
}

export type ItemType = "IRON_ORE" | "COAL" | "COPPER_ORE"