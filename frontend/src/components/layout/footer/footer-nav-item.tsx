import type {FooterItem} from "../../../configs/navigation/footer/footer-item.type.ts";
import {useTranslation} from "react-i18next";
import {NavLink} from "react-router-dom";

type Props = {
    item: FooterItem;
};

export default function FooterNavItem({
                                          item,
                                      }: Readonly<Props>) {
    const {t} = useTranslation("navigation");

    const getClasses = (isActive: boolean) => {
        if (isActive) {
            return "text-stone-800 dark:text-slate-200";
        }

        return "hover:text-stone-800 dark:hover:text-slate-200 transition-colors cursor-pointer";
    };

    return (
        <NavLink
            to={item.to}
            className={({isActive}) => [
                getClasses(isActive)
            ].join(" ")}
        >
            {t(item.labelKey)}
        </NavLink>
    );
}
