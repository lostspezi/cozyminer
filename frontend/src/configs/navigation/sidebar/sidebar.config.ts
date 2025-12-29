import type {SidebarItem} from "./sidebar-item.type";
import {GiAnvil, GiCampfire, GiMiner} from "react-icons/gi";

export const getSidebarItems = (): SidebarItem[] => [
    {
        id: "dashboard",
        label: "Dashboard",
        to: "/",
        icon: GiCampfire,
    },
    {
        id: "miner",
        label: "Miner",
        to: "/miner",
        icon: GiMiner,
    },
    {
        id: "smelter",
        label: "Smelter",
        to: "/smelter",
        icon: GiAnvil,
        locked: true,
        disabled: true,
        title: "Unlocks later",
    },
];
