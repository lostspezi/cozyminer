import {NavLink} from "react-router-dom";
import {HiLockClosed} from "react-icons/hi";
import type {SidebarItem} from "../../../../configs/navigation/sidebar/sidebar-item.type.ts";

type Props = {
    item: SidebarItem;
    isRight: boolean;
    collapsed: boolean;
};

export default function SidebarNavItem({
                                           item,
                                           isRight,
                                           collapsed,
                                       }: Readonly<Props>) {
    const Icon = item.icon;

    const getClasses = (isActive: boolean) => {
        if (item.disabled) {
            return "opacity-40 cursor-not-allowed pointer-events-none";
        }

        if (isActive) {
            return "bg-emerald-500 text-white";
        }

        return "hover:bg-stone-200 dark:hover:bg-slate-700";
    };

    return (
        <NavLink
            to={item.disabled ? "#" : item.to}
            title={item.title}
            aria-disabled={item.disabled}
            onClick={(e) => item.disabled && e.preventDefault()}
            className={({isActive}) =>
                [
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                    isRight ? "justify-end" : "",
                    getClasses(isActive),
                ].join(" ")
            }
        >
            {!isRight && <Icon size={20}/>}

            {!collapsed && (
                <span className="hidden sm:flex items-center gap-2">
                    {item.label}
                    {item.locked && <HiLockClosed className="text-xs opacity-70"/>}
                </span>
            )}

            {isRight && <Icon size={20}/>}
        </NavLink>
    );
}
