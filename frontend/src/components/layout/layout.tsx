import {Outlet, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {FaRegCopyright} from "react-icons/fa";
import Sidebar from "./navigation/sidebar/sidebar.tsx";
import type {User} from "../../types/user.ts";
import Header from "./header/header.tsx";

type LayoutProps = {
    user: User;
    darkMode: boolean;
    toggleDarkMode: () => void;
};

type SidebarPosition = "left" | "right";
const SIDEBAR_KEY = "cozy-sidebar-position";

export default function Layout({user, darkMode, toggleDarkMode}: Readonly<LayoutProps>) {
    const [sidebarPosition, setSidebarPosition] = useState<SidebarPosition>(
        () =>
            (localStorage.getItem(SIDEBAR_KEY) as SidebarPosition) || "left"
    );

    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem(SIDEBAR_KEY, sidebarPosition);
    }, [sidebarPosition]);

    return (
        <div className="flex min-h-screen flex-col bg-stone-50 dark:bg-slate-900 text-stone-800 dark:text-slate-100">
            <Header user={user} darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
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
