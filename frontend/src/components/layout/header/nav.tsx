import {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import type {User} from "../../../types/user.ts";
import AccountMenu from "../navigation/account/account-menu.tsx";
import LanguageSwitch from "./language-switch.tsx";
import PlayerProgress from "./player-progress.tsx";
import DarkModeToggle from "../../shared/dark-mode-toggle.tsx";

type NavProps = {
    user: User;
    darkMode: boolean;
    toggleDarkMode: () => void;
};

export default function Nav({
                                user,
                                darkMode,
                                toggleDarkMode
                            }: Readonly<NavProps>) {
    const [open, setOpen] = useState(false);
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
        <nav className="flex flex-row justify-between items-center">
            {/* LEFT */}
            <div className="font-semibold tracking-wide">
                Cozy Miner
            </div>

            {/* CENTER */}
            <PlayerProgress user={user}/>

            {/* RIGHT */}
            <div ref={menuRef} className="flex items-center justify-end gap-2">
                <LanguageSwitch/>
                <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
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
                    <AccountMenu
                        onLogout={logout}
                        onAccountSettings={handleAccountSettingsClick}
                    />
                </div>
            </div>
        </nav>
    );
}