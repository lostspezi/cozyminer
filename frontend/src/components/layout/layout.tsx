import {Outlet, useNavigate} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {FiLogOut, FiSettings} from "react-icons/fi";
import {HiMoon, HiSun} from "react-icons/hi";
import {FaRegCopyright} from "react-icons/fa";
import Sidebar from "./sidebar.tsx";
import type {User} from "../../types/user.ts";

type LayoutProps = {
    user: User;
    darkMode: boolean;
    toggleDarkMode: () => void;
};

type SidebarPosition = "left" | "right";
const SIDEBAR_KEY = "cozy-sidebar-position";

export default function Layout({user, darkMode, toggleDarkMode}: Readonly<LayoutProps>) {
    const [open, setOpen] = useState(false);
    const [sidebarPosition, setSidebarPosition] = useState<SidebarPosition>(
        () =>
            (localStorage.getItem(SIDEBAR_KEY) as SidebarPosition) || "left"
    );

    useEffect(() => {
        localStorage.setItem(SIDEBAR_KEY, sidebarPosition);
    }, [sidebarPosition]);

    const navigate = useNavigate();
    const menuRef = useRef<HTMLDivElement>(null);

    const logout = () => {
        globalThis.window.location.href = "http://localhost:8080/logout";
    };

    const handleAccountSettingsClick = () => {
        setOpen(false);
        navigate("/account-settings");
    };

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
        <div className="flex min-h-screen flex-col bg-stone-50 dark:bg-slate-900 text-stone-800 dark:text-slate-100">
            <header
                className="
    relative z-30
    border-b border-stone-200 dark:border-slate-700
    bg-stone-100 dark:bg-slate-800
    px-6 py-4
  "
            >
                <nav className="grid grid-cols-3 items-center">
                    {/* LEFT */}
                    <div className="font-semibold tracking-wide">
                        Cozy Miner
                    </div>

                    {/* CENTER */}
                    <div className="flex flex-col items-center">
        <span className="text-xs uppercase tracking-wide text-stone-500 dark:text-slate-400">
          Level 42
        </span>

                        <div className="mt-1 h-2 w-40 rounded-full bg-stone-300 dark:bg-slate-600 overflow-hidden">
                            <div
                                className="h-full w-[52%] rounded-full bg-emerald-500 dark:bg-emerald-400 transition-all"/>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div ref={menuRef} className="relative ml-auto flex items-center gap-3">
        <span className="text-sm text-stone-600 dark:text-slate-300">
          {user.username}
        </span>

                        <button
                            onClick={() => setOpen(!open)}
                            className="rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-400 cursor-pointer"
                        >
                            <img
                                className="h-9 w-9 rounded-full object-cover ring-1 ring-stone-300 dark:ring-slate-500"
                                src={user.avatarUrl}
                                alt={user.username}
                            />
                        </button>

                        {/* DROPDOWN */}
                        <div
                            className={`
    absolute right-0 top-12 w-52 rounded-lg
    bg-white dark:bg-slate-700
    border border-stone-200 dark:border-slate-600
    shadow-xl
    z-50
    transform transition-all duration-200 ease-out
    ${open ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"}
  `}
                        >
                            <ul className="py-1">
                                <li>
                                    <button
                                        onClick={handleAccountSettingsClick}
                                        className="flex w-full items-center gap-2 px-4 py-2 text-sm
                           hover:bg-stone-100 dark:hover:bg-slate-600 cursor-pointer"
                                    >
                                        <FiSettings className="h-4 w-4"/>
                                        Account Settings
                                    </button>
                                </li>

                                <li>
                                    <button
                                        onClick={toggleDarkMode}
                                        className="flex w-full items-center gap-2 px-4 py-2 text-sm
                           hover:bg-stone-100 dark:hover:bg-slate-600 cursor-pointer"
                                    >
                                        {darkMode ? <HiSun/> : <HiMoon/>}
                                        {darkMode ? "Light Mode" : "Dark Mode"}
                                    </button>
                                </li>

                                <li>
                                    <button
                                        onClick={logout}
                                        className="flex w-full items-center gap-2 px-4 py-2 text-sm
                           text-red-600 dark:text-red-500
                           hover:bg-red-50 dark:hover:bg-slate-600 cursor-pointer"
                                    >
                                        <FiLogOut className="h-4 w-4"/>
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <main className="flex flex-1">
                {sidebarPosition === "left" && (
                    <Sidebar
                        position="left"
                        onTogglePosition={() =>
                            setSidebarPosition((p) => (p === "left" ? "right" : "left"))
                        }
                    />
                )}

                <section className="flex-1 p-6">
                    <Outlet/>
                </section>

                {sidebarPosition === "right" && (
                    <Sidebar
                        position="right"
                        onTogglePosition={() =>
                            setSidebarPosition((p) => (p === "left" ? "right" : "left"))
                        }
                    />
                )}
            </main>

            <footer
                className="border-t border-stone-200 dark:border-slate-700 bg-stone-100 dark:bg-slate-800 px-6 py-4">
                <div
                    className="mx-auto flex max-w-5xl flex-col items-center gap-2 text-xs text-stone-500 dark:text-slate-400 sm:flex-row sm:justify-between">

                    {/* FOOTER MENU */}
                    <nav className="flex gap-4">
                        <button
                            onClick={() => navigate("/contact")}
                            className="hover:text-stone-800 dark:hover:text-slate-200 transition-colors cursor-pointer"
                        >
                            Contact
                        </button>

                        <button
                            onClick={() => navigate("/imprint")}
                            className="hover:text-stone-800 dark:hover:text-slate-200 transition-colors cursor-pointer"
                        >
                            Imprint
                        </button>

                        <button
                            onClick={() => navigate("/privacy-policy")}
                            className="hover:text-stone-800 dark:hover:text-slate-200 transition-colors cursor-pointer"
                        >
                            Privacy Policy
                        </button>
                    </nav>

                    {/* COPYRIGHT */}
                    <div className="text-center sm:text-right flex items-center gap-2">
                        <FaRegCopyright/> {new Date().getFullYear()} Cozy Miner. All rights reserved.
                    </div>
                </div>
            </footer>

        </div>
    );
}
