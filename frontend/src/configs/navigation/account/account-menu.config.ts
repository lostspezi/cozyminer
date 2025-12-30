import type {MenuItem} from "./account-menu-item.type.ts";
import {FiLogOut, FiSettings} from "react-icons/fi";

type AccountMenuConfigProps = {
    onLogout: () => void;
    onAccountSettings: () => void;
};

export const getAccountMenuItems = ({
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
        id: "logout",
        labelKey: "account.logout",
        icon: FiLogOut,
        onClick: onLogout,
        danger: true,
    },
];
