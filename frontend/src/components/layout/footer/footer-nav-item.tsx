import type {FooterItem} from "../../../configs/navigation/footer/footer-item.type.ts";
import {useTranslation} from "react-i18next";

type Props = {
    item: FooterItem;
    onNavigate: (to: string) => void;
};

export default function FooterNavItem({
                                          item,
                                          onNavigate,
                                      }: Readonly<Props>) {
    const {t} = useTranslation("navigation");

    return (
        <button
            onClick={() => onNavigate(item.to)}
            className="
        hover:text-stone-800 dark:hover:text-slate-200
        transition-colors cursor-pointer
      "
        >
            {t(item.labelKey)}
        </button>
    );
}
