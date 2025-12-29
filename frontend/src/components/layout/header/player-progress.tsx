import type {User} from "../../../types/user";
import {useTranslation} from "react-i18next";

type PlayerProgressProps = {
    user: User;
};

export default function PlayerProgress({user}: Readonly<PlayerProgressProps>) {
    const {level} = user;
    const {t} = useTranslation("navigation");

    return (
        <div className="flex flex-col items-center gap-1">
            {/* SMALL: Compact text */}
            <span
                className="
                    block md:hidden
                    text-xs uppercase tracking-wide
                    text-stone-500 dark:text-slate-400
                "
            >
                Level {level.current} ({level.progressPercent}%)
            </span>

            {/* MEDIUM+: Level text */}
            <span
                className="
                    hidden md:block
                    text-xs uppercase tracking-wide
                    text-stone-500 dark:text-slate-400
                "
            >
                Level {level.current}
            </span>

            {/* MEDIUM+: Progress Bar */}
            <div
                className="
                    hidden md:flex
                    relative
                    mt-1
                    h-3 w-44
                    rounded-full
                    bg-stone-300 dark:bg-slate-600
                    overflow-hidden
                    items-center
                "
            >
                {/* Filled bar */}
                <div
                    className="
                        h-full
                        rounded-full
                        bg-emerald-500 dark:bg-emerald-400
                        transition-all duration-300
                    "
                    style={{width: `${level.progressPercent}%`}}
                />

                {/* Percentage text inside bar */}
                <span
                    className="
                        absolute inset-0
                        flex items-center justify-center
                        text-[10px]
                        font-medium
                        text-stone-800 dark:text-slate-900
                        pointer-events-none
                    "
                >
                    {level.progressPercent}%
                </span>
            </div>

            {/* MEDIUM+: Missing XP */}
            <span
                className="
                    hidden md:block
                    text-[10px]
                    text-stone-500 dark:text-slate-400
                "
            >
                {t("playerProgress.missingXp", {xp: level.missingXp})}
            </span>
        </div>
    );
}
