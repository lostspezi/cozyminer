import type {User} from "../types/user";
import {Outlet, useNavigate} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {FiLogOut, FiSettings} from "react-icons/fi";

type LayoutProps = {
    user: User;
};

export default function Layout({user}: Readonly<LayoutProps>) {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const menuRef = useRef<HTMLDivElement>(null);

    const logout = () => {
        globalThis.window.location.href = "http://localhost:8080/logout";
    };

    const handleAccountSettingsClick = () => {
        setOpen(!open);
        navigate("/account-settings");
    }

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
        <div className="flex min-h-screen flex-col">
            <header className="bg-gray-200 px-6 py-4">
                <nav className="grid grid-cols-3 items-center">
                    {/* LEFT */}
                    <div className="font-semibold">Cozy Miner</div>

                    {/* CENTER */}
                    <div className="flex flex-col items-center">
                        <span className="text-sm font-medium">Level 42</span>
                        <div className="mt-1 h-2 w-40 rounded-full bg-gray-300">
                            <div className="h-2 w-[52%] rounded-full bg-green-500 transition-all"/>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div ref={menuRef} className="relative ml-auto flex items-center gap-3">
                        <span>{user.username}</span>

                        <button onClick={() => setOpen(!open)} className="cursor-pointer">
                            <img
                                className="h-8 w-8 rounded-full object-cover"
                                src={user.avatarUrl}
                                alt={user.username}
                            />
                        </button>

                        <div
                            className={`
                absolute right-0 top-12 w-48 rounded-md bg-white shadow-lg ring-1 ring-black/5
                transform transition-all duration-200 ease-out
                ${
                                open
                                    ? "scale-100 opacity-100"
                                    : "pointer-events-none scale-95 opacity-0"
                            }
              `}
                        >
                            <ul className="py-1">
                                <li>
                                    <button onClick={handleAccountSettingsClick}
                                            className="flex w-full items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
                                        <FiSettings className="h-4 w-4"/>
                                        Account Settings
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={logout}
                                        className="flex w-full items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 cursor-pointer"
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

            <main className="flex-1 p-4">
                <Outlet/>
            </main>

            <footer className="bg-gray-100 p-2 text-center text-sm">
                Cozy Miner
            </footer>
        </div>
    );
}
