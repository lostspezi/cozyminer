export type MinerResponse = {
    id: string,
    oreType: OreType,
    level: number,
    currentXp: number,
    xpToNextLevel: number,
}

export type OreType = "IRON" | "COPPER" | "COAL";
