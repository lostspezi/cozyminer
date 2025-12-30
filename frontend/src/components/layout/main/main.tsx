import Sidebar from "../navigation/sidebar/sidebar.tsx";
import {Outlet} from "react-router-dom";
import {useEffect, useState} from "react";

type SidebarPosition = "left" | "right";
const SIDEBAR_KEY = "cozy-sidebar-position";

export default function Main() {
    const [sidebarPosition, setSidebarPosition] = useState<SidebarPosition>(
        () =>
            (localStorage.getItem(SIDEBAR_KEY) as SidebarPosition) || "left"
    );

    useEffect(() => {
        localStorage.setItem(SIDEBAR_KEY, sidebarPosition);
    }, [sidebarPosition]);

    return (
        <main className="flex flex-1 overflow-hidden">
            {sidebarPosition === "left" && (
                <Sidebar
                    position="left"
                    onTogglePosition={() =>
                        setSidebarPosition((p) => (p === "left" ? "right" : "left"))
                    }
                />
            )}

            <section className="flex-1 p-6 overflow-y-auto">
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
    );
}
