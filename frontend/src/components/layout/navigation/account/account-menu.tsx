import {getAccountMenuItems} from "../../../../configs/navigation/account/account-menu.config.ts";
import Menu from "./menu.tsx";

type AccountMenuProps = {
    darkMode: boolean;
    onToggleDarkMode: () => void;
    onLogout: () => void;
    onAccountSettings: () => void;
};

export default function AccountMenu({
                                        darkMode,
                                        onToggleDarkMode,
                                        onLogout,
                                        onAccountSettings,
                                    }: Readonly<AccountMenuProps>) {
    const items = getAccountMenuItems({
        darkMode,
        onToggleDarkMode,
        onLogout,
        onAccountSettings,
    });

    return <Menu items={items}/>;
}
