import {FaRegCopyright} from "react-icons/fa";
import {FOOTER_ITEMS} from "../../../configs/navigation/footer/footer.config.ts";
import FooterNavItem from "./footer-nav-item.tsx";
import {useTranslation} from "react-i18next";

export default function Footer() {
    const year = new Date().getFullYear();
    const {t} = useTranslation("common");

    return (
        <footer
            className="sticky bottom-0 z-20 border-t border-stone-200 dark:border-slate-700 bg-stone-100 dark:bg-slate-800 px-6 py-4">
            <div
                className="mx-auto flex max-w-5xl flex-col items-center gap-2 text-xs text-stone-500 dark:text-slate-400 sm:flex-row sm:justify-between">
                {/* FOOTER MENU */}
                <nav className="flex gap-4">
                    {FOOTER_ITEMS.map((item) => (
                        <FooterNavItem
                            key={item.id}
                            item={item}
                        />
                    ))}
                </nav>

                {/* COPYRIGHT */}
                <div className="flex items-center gap-2">
                    <FaRegCopyright/>
                    {year} Cozy Miner. {t('footerText')}
                </div>
            </div>
        </footer>
    );
}
