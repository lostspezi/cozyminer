import type {SidebarItem} from "./sidebar-item.type";
import {GiAnvil, GiCampfire, GiMiner, GiOpenTreasureChest} from "react-icons/gi";

export const getSidebarItems = (): SidebarItem[] => [
    {
        id: "dashboard",
        labelKey: "sidebar.dashboard",
        to: "/",
        icon: GiCampfire,
    },
    {
        id: "inventory",
        labelKey: "sidebar.inventory",
        to: "/inventory",
        icon: GiOpenTreasureChest
    },
    {
        id: "miner",
        labelKey: "sidebar.miner",
        to: "/miner",
        icon: GiMiner,
    },
    {
        id: "smelter",
        labelKey: "sidebar.smelter",
        to: "/smelter",
        icon: GiAnvil,
        locked: true,
        disabled: true,
        titleKey: "sidebar.locked",
    },
];
