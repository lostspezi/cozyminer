import {useState} from "react";
import {HiChevronDown, HiLockClosed} from "react-icons/hi";
import type {IconType} from "react-icons";

type Item = {
    id: string;
    name: string;
    amount: number;
};

type Props = {
    title: string;
    icon: IconType;
    items: Item[];
    locked?: boolean;
};

export default function InventoryCategory({
                                              title,
                                              icon,
                                              items,
                                              locked = false,
                                          }: Readonly<Props>) {
    const [open, setOpen] = useState(false);

    const Icon = icon;

    return (
        <div
            className="rounded-xl border border-stone-200 dark:border-slate-700 bg-white dark:bg-slate-800 overflow-hidden">
            {/* HEADER */}
            <button
                disabled={locked}
                onClick={() => setOpen((o) => !o)}
                className={`
                    w-full flex items-center justify-between
                    px-4 py-3
                    text-left
                    transition-colors
                    ${locked
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-stone-100 dark:hover:bg-slate-700 cursor-pointer"}
                `}
            >
                <div className="flex items-center gap-3">
                    <span className="text-lg">{<Icon/>}</span>
                    <span className="font-medium">{title}</span>
                    {locked && <HiLockClosed className="text-sm"/>}
                </div>

                {!locked && (
                    <HiChevronDown
                        className={`transition-transform ${
                            open ? "rotate-180" : ""
                        }`}
                    />
                )}
            </button>

            {/* CONTENT */}
            {open && !locked && (
                <div className="divide-y divide-stone-200 dark:divide-slate-700">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center gap-4 px-4 py-3"
                        >
                            {/* PLACEHOLDER ICON */}
                            <div
                                className="h-10 w-10 rounded-lg bg-stone-200 dark:bg-slate-700 flex items-center justify-center text-xs">
                                IMG
                            </div>

                            <div className="flex-1">
                                <div className="text-sm font-medium">
                                    {item.name}
                                </div>
                            </div>

                            <div className="text-sm text-stone-500 dark:text-slate-400">
                                x{item.amount}
                            </div>
                        </div>
                    ))}

                    {items.length === 0 && (
                        <div className="px-4 py-3 text-sm text-stone-500 dark:text-slate-400">
                            No items yet
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
