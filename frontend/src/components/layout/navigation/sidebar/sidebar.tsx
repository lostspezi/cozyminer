import {useState} from "react";
import {HiChevronDoubleLeft, HiSwitchHorizontal} from "react-icons/hi";
import SidebarNavItem from "./sidebar-nav-item";
import {getSidebarItems} from "../../../../configs/navigation/sidebar/sidebar.config.ts";
import {useTranslation} from "react-i18next";

type SidebarProps = {
    position: "left" | "right";
    onTogglePosition: () => void;
};

export default function Sidebar({
                                    position,
                                    onTogglePosition,
                                }: Readonly<SidebarProps>) {
    const [collapsed, setCollapsed] = useState(false);
    const isRight = position === "right";
    const items = getSidebarItems();
    const {t} = useTranslation("navigation");

    const shouldRotateCollapseIcon = (): boolean =>
        (!isRight && collapsed) || (isRight && !collapsed);

    return (
        <aside
            className={[
                "relative z-20 shrink-0 transition-all duration-300 ease-out",
                "bg-stone-100 dark:bg-slate-800",
                "border-stone-200 dark:border-slate-700",
                isRight ? "border-l" : "border-r",
                "w-16",
                collapsed ? "sm:w-16" : "sm:w-56",
            ].join(" ")}
        >
            {/* NAV */}
            <nav className={`space-y-2 p-2 ${isRight ? "items-end text-right" : ""}`}>
                {items.map((item) => (
                    <SidebarNavItem
                        key={item.id}
                        item={item}
                        isRight={isRight}
                        collapsed={collapsed}
                    />
                ))}
            </nav>

            {/* BOTTOM ACTIONS */}
            <div className="absolute bottom-2 flex w-full flex-col items-center gap-1">
                {/* COLLAPSE */}
                <button
                    onClick={() => setCollapsed((c) => !c)}
                    className="
            hidden sm:flex
            items-center gap-2 rounded-md p-2
            text-stone-500 dark:text-slate-400
            hover:bg-stone-200 dark:hover:bg-slate-700
            transition-colors cursor-pointer
          "
                >
                    <HiChevronDoubleLeft
                        className={`transition-transform ${
                            shouldRotateCollapseIcon() ? "rotate-180" : ""
                        }`}
                    />
                    {!collapsed && <span className="text-xs">{t('sidebar.collapse')}</span>}
                </button>

                {/* POSITION */}
                <button
                    onClick={onTogglePosition}
                    className="flex items-center rounded-md p-2 text-stone-500 dark:text-slate-400 hover:bg-stone-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                >
                    <HiSwitchHorizontal/>
                    {!collapsed && (
                        <span className="hidden sm:inline text-xs ml-2">
                            {t('sidebar.switchSide')}
                        </span>
                    )}
                </button>
            </div>
        </aside>
    );
}
