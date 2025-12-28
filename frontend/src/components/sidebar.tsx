import {NavLink} from "react-router-dom";
import {GiAnvil, GiCampfire, GiMiner} from "react-icons/gi";
import {HiChevronDoubleLeft, HiLockClosed, HiSwitchHorizontal} from "react-icons/hi";
import {useState} from "react";

type SidebarProps = {
    position: "left" | "right";
    onTogglePosition: () => void;
};

export default function Sidebar({
                                    position,
                                    onTogglePosition,
                                }: Readonly<SidebarProps>) {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const isRight: boolean = position === "right";
    const isSmelterLocked = true;

    const getSmelterClasses = (isActive: boolean) => {
        if (isSmelterLocked) {
            return [
                "opacity-40",
                "cursor-not-allowed",
                "pointer-events-none",
            ].join(" ");
        }

        if (isActive) {
            return "bg-emerald-500 text-white";
        }

        return "hover:bg-stone-200 dark:hover:bg-slate-700";
    };

    const shouldRotateCollapseIcon = (): boolean => {
        // HiChevronDoubleLeft points LEFT by default.
        // Rotate when we need it to point RIGHT:
        // - left sidebar + collapsed (expand)
        // - right sidebar and expanded (collapse)
        return (!isRight && collapsed) || (isRight && !collapsed);
    };

    return (
        <aside
            className={[
                "relative shrink-0 transition-all duration-300 ease-out",
                "bg-stone-100 dark:bg-slate-800",
                "border-stone-200 dark:border-slate-700",
                isRight ? "border-l" : "border-r",
                "w-16",
                collapsed ? "sm:w-16" : "sm:w-56",
            ].join(" ")}
        >
            {/* NAV */}
            <nav className={`space-y-2 p-2 ${isRight ? "items-end text-right" : ""}`}>
                <NavLink
                    to="/"
                    className={({isActive}) =>
                        [
                            "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                            isRight ? "justify-end" : "",
                            isActive
                                ? "bg-emerald-500 text-white"
                                : "hover:bg-stone-200 dark:hover:bg-slate-700",
                        ].join(" ")
                    }
                >
                    {!isRight && <GiCampfire size={20}/>}
                    {!collapsed && <span className="hidden sm:inline">Dashboard</span>}
                    {isRight && <GiCampfire size={20}/>}
                </NavLink>

                <NavLink
                    to="/miner"
                    className={({isActive}) =>
                        [
                            "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                            isRight ? "justify-end" : "",
                            isActive
                                ? "bg-emerald-500 text-white"
                                : "hover:bg-stone-200 dark:hover:bg-slate-700",
                        ].join(" ")
                    }
                >
                    {!isRight && <GiMiner size={20}/>}
                    {!collapsed && <span className="hidden sm:inline">Miner</span>}
                    {isRight && <GiMiner size={20}/>}
                </NavLink>

                <NavLink
                    to={isSmelterLocked ? "#" : "/smelter"}
                    onClick={(e) => {
                        if (isSmelterLocked) {
                            e.preventDefault();
                            e.stopPropagation();
                        }
                    }}
                    aria-disabled={isSmelterLocked}
                    title={isSmelterLocked ? "Unlocks later" : "Open smelter"}
                    className={({isActive}) =>
                        [
                            "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                            isRight ? "justify-end" : "",
                            getSmelterClasses(isActive),
                        ].join(" ")
                    }
                >
                    {/* LEFT ICON */}
                    {!isRight && <GiAnvil size={20}/>}

                    {/* LABEL */}
                    {!collapsed && !isRight && (
                        <span className="hidden sm:flex items-center gap-2">
            Smelter
                            {isSmelterLocked && (
                                <HiLockClosed className="text-xs opacity-70"/>
                            )}
        </span>
                    )}

                    {/* RIGHT ICON */}

                    {/* LABEL */}
                    {!collapsed && isRight && (
                        <span className="hidden sm:flex items-center gap-2">{isSmelterLocked && (
                            <HiLockClosed className="text-xs opacity-70"/>
                        )}Smelter</span>
                    )}
                    {isRight && <GiAnvil size={20}/>}
                </NavLink>

            </nav>

            {/* BOTTOM ACTIONS */}
            <div
                className={`absolute bottom-2 flex flex-col justify-center items-center gap-1 w-full`}
            >
                {/* COLLAPSE TOGGLE – desktop only */}
                <button
                    onClick={() => setCollapsed((c) => !c)}
                    className="
      hidden sm:flex
      items-center gap-2
      rounded-md p-2
      text-stone-500 dark:text-slate-400
      hover:bg-stone-200 dark:hover:bg-slate-700
      transition-colors
      cursor-pointer
    "
                    title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
                >
                    <HiChevronDoubleLeft
                        className={`transition-transform ${
                            shouldRotateCollapseIcon() ? "rotate-180" : ""
                        }`}
                    />
                    {!collapsed && <span className="text-xs">Collapse</span>}
                </button>

                {/* POSITION TOGGLE */}
                <button
                    onClick={onTogglePosition}
                    className={`
                        rounded-md p-2
                      text-stone-500 dark:text-slate-400
                      hover:bg-stone-200 dark:hover:bg-slate-700
                      transition-colors
                      cursor-pointer
                      ${!collapsed && "flex items-center justify-center gap-2"}
                    `}
                    title="Switch sidebar side"
                >
                    <HiSwitchHorizontal/>
                    {!collapsed && <span className="hidden sm:inline text-xs">Switch side</span>}
                </button>
            </div>
        </aside>
    );
}
