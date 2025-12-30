import type {ComponentType} from "react";

export type OreType = {
    id: string;
    name: string;
    icon: ComponentType<{ size?: number }>;
    colorClass: string;
};

export type Mine = {
    id: string;
    ore: OreType;

    level: number;

    progressPercent: number;

    yieldPerAction: number;
    upgradeCost: number;

    locked?: boolean;
};
