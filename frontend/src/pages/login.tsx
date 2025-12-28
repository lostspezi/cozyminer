import {FaDiscord} from "react-icons/fa";
import {HiMoon, HiSun} from "react-icons/hi";
import {Navigate} from "react-router-dom";
import type {User} from "../types/user";
import LoginBg from "../assets/img/login_bg.png";

type LoginProps = {
    user: User | null | undefined;
    darkMode: boolean;
    toggleDarkMode: () => void;
};

export default function Login({
                                  user,
                                  darkMode,
                                  toggleDarkMode,
                              }: Readonly<LoginProps>) {
    if (user) {
        return <Navigate to="/"/>;
    }

    const login = () => {
        globalThis.window.location.href =
            "http://localhost:8080/oauth2/authorization/discord";
    };

    return (
        <div
            className="relative h-screen w-screen overflow-hidden bg-stone-50 dark:bg-slate-900 text-stone-800 dark:text-slate-100">

            {/* IMAGE BACKGROUND */}
            <img
                src={LoginBg}
                alt="Cozy mining background"
                className="
          absolute inset-0
          h-full w-full
          object-cover
          scale-105
          blur-sm
          opacity-80 dark:opacity-60
        "
            />

            {/* SOFT COLOR OVERLAY */}
            <div className="
        absolute inset-0 z-10
        bg-stone-100/70 dark:bg-slate-900/70
      "/>

            {/* DARK MODE TOGGLE */}
            <button
                onClick={toggleDarkMode}
                className="
          absolute top-6 right-6 z-30
          rounded-full p-2
          bg-white/80 dark:bg-slate-800/80
          hover:bg-white dark:hover:bg-slate-700
          transition-colors cursor-pointer
        "
                aria-label="Toggle dark mode"
            >
                {darkMode ? <HiSun size={20}/> : <HiMoon size={20}/>}
            </button>

            {/* LOGIN CARD */}
            <div className="relative z-20 flex h-full items-center justify-center px-6">
                <div
                    className="
            w-full max-w-2xl
            rounded-2xl
            bg-white/80 dark:bg-slate-800/80
            backdrop-blur-md
            shadow-xl
            border border-stone-200 dark:border-slate-700
            p-8 space-y-6
          "
                >
                    <h1 className="text-center text-4xl font-semibold tracking-wide">
                        Cozy Miner
                    </h1>

                    <p className="text-center text-sm text-stone-600 dark:text-slate-400">
                        A calm idle mining experience focused on comfort, progression,
                        and steady growth.
                    </p>

                    <div className="space-y-3 text-sm leading-relaxed text-stone-700 dark:text-slate-300">
                        <p>
                            Start small, gather resources, and slowly improve your mining
                            setup over time.
                        </p>
                        <p>
                            Unlock upgrades, automate production, and watch your mine grow
                            even when you are away.
                        </p>
                        <p>
                            Designed for relaxed play sessions without pressure or competition.
                        </p>
                    </div>

                    <button
                        onClick={login}
                        className="
              mt-4 w-full
              rounded-xl
              bg-emerald-500 hover:bg-emerald-600
              text-white
              py-3
              flex items-center justify-center gap-3
              transition-colors
              focus:outline-none focus:ring-2 focus:ring-emerald-400
              cursor-pointer
            "
                    >
                        <FaDiscord size={22}/>
                        Login with Discord
                    </button>
                </div>
            </div>
        </div>
    );
}
