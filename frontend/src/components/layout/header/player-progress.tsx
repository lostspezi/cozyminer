export default function PlayerProgress() {
    return (
        <div className="flex flex-col items-center">
            {/* SMALL: Text mit Prozent */}
            <span
                className="
                    block md:hidden
                    text-xs uppercase tracking-wide
                    text-stone-500 dark:text-slate-400
                "
            >
                Level 42 (25%)
            </span>

            {/* MEDIUM+: Text ohne Prozent */}
            <span
                className="
                    hidden md:block
                    text-xs uppercase tracking-wide
                    text-stone-500 dark:text-slate-400
                "
            >
                Level 42
            </span>

            {/* MEDIUM+: Progress Bar */}
            <div
                className="
                    hidden md:block
                    mt-1 h-2 w-40
                    rounded-full
                    bg-stone-300 dark:bg-slate-600
                    overflow-hidden
                "
            >
                <div
                    className="
                        h-full w-[52%]
                        rounded-full
                        bg-emerald-500 dark:bg-emerald-400
                        transition-all
                    "
                />
            </div>
        </div>
    );
}
