import {getAccountMenuItems} from "../../../../configs/navigation/account/account-menu.config.ts";
import Menu from "./menu.tsx";

type AccountMenuProps = {
    onLogout: () => void;
    onAccountSettings: () => void;
};

export default function AccountMenu({
                                        onLogout,
                                        onAccountSettings,
                                    }: Readonly<AccountMenuProps>) {
    const items = getAccountMenuItems({
        onLogout,
        onAccountSettings,
    });

    return <Menu items={items}/>;
}
