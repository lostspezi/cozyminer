import {GiStoneBlock} from "react-icons/gi";
import type {OreType} from "../types/mine.type";

export const ORES: Record<string, OreType> = {
    iron: {
        id: "iron",
        name: "Iron Ore",
        icon: GiStoneBlock,
        colorClass: "bg-emerald-500",
    },
};
