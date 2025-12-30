export type User = {
    id: string;
    username: string;
    avatarUrl: string;
    email: string;
    level: PlayerLevel;
}

export type PlayerLevel = {
    current: number;
    currentXp: number;
    xpForNextLevel: number;
    missingXp: number;
    progressPercent: number;
};