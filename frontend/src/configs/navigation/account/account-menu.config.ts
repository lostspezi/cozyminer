import type {MenuItem} from "./account-menu-item.type.ts";
import {FiLogOut, FiSettings} from "react-icons/fi";
import {HiMoon, HiSun} from "react-icons/hi";

type AccountMenuConfigProps = {
    darkMode: boolean;
    onToggleDarkMode: () => void;
    onLogout: () => void;
    onAccountSettings: () => void;
};

export const getAccountMenuItems = ({
                                        darkMode,
                                        onToggleDarkMode,
                                        onLogout,
                                        onAccountSettings,
                                    }: AccountMenuConfigProps): MenuItem[] => [
    {
        id: "account-settings",
        labelKey: "account.settings",
        icon: FiSettings,
        onClick: onAccountSettings,
    },
    {
        id: "theme-toggle",
        labelKey: darkMode ? "account.lightMode" : "account.darkMode",
        icon: darkMode ? HiSun : HiMoon,
        onClick: onToggleDarkMode,
    },
    {
        id: "logout",
        labelKey: "account.logout",
        icon: FiLogOut,
        onClick: onLogout,
        danger: true,
    },
];
