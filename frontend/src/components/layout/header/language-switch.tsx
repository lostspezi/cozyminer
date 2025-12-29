import {HiTranslate} from "react-icons/hi";
import {useEffect, useRef, useState} from "react";
import {useTranslation} from "react-i18next";
import {changeLanguage} from "i18next";
import ConfirmDialog from "../../shared/confirm-dialog";
import {LANGUAGES} from "../config/language.config";

type Lang = "en" | "de";

export default function LanguageSwitch() {
    const {i18n, t} = useTranslation();
    const currentLang = i18n.language as Lang;

    const [open, setOpen] = useState(false);
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [nextLang, setNextLang] = useState<Lang>("en");

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    const handleSelect = (lng: Lang) => {
        setNextLang(lng);
        setOpen(false);
        setConfirmOpen(true);
    };

    const availableLanguages = LANGUAGES.filter(
        (l) => l.code !== currentLang
    );

    return (
        <>
            <div ref={ref} className="relative">
                {/* BUTTON */}
                <button
                    onClick={() => setOpen((o) => !o)}
                    className="
                        flex items-center gap-1
                        rounded-full px-3 py-2
                        text-xs font-semibold
                        border border-stone-300 dark:border-slate-600
                        hover:bg-stone-200 dark:hover:bg-slate-700
                        transition-colors
                        cursor-pointer
                    "
                    title={t("language.change", "Change language")}
                >
                    <HiTranslate className="text-sm"/>
                    {currentLang.toUpperCase()}
                </button>

                {/* DROPDOWN */}
                {open && (
                    <div
                        className="
                            absolute right-0 mt-2
                            min-w-[120px]
                            rounded-lg
                            bg-white dark:bg-slate-700
                            border border-stone-200 dark:border-slate-600
                            shadow-lg
                            z-50
                        "
                    >
                        {availableLanguages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => handleSelect(lang.code)}
                                className="
                                    flex w-full items-center gap-2
                                    px-4 py-2 text-sm
                                    hover:bg-stone-100 dark:hover:bg-slate-600
                                    cursor-pointer
                                "
                            >
                                {lang.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* CONFIRM DIALOG */}
            <ConfirmDialog
                open={confirmOpen}
                title={t("language.confirmTitle", "Change language")}
                message={t(
                    "language.confirmMessage",
                    "Do you really want to change the language?"
                )}
                onCancel={() => setConfirmOpen(false)}
                onConfirm={() => {
                    changeLanguage(nextLang);
                    setConfirmOpen(false);
                }}
            />
        </>
    );
}
