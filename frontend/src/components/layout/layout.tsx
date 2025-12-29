import {Outlet} from "react-router-dom";
import {useEffect, useState} from "react";
import Sidebar from "./navigation/sidebar/sidebar.tsx";
import type {User} from "../../types/user.ts";
import Header from "./header/header.tsx";
import Footer from "./footer/footer.tsx";

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

            <Footer/>

        </div>
    );
}
