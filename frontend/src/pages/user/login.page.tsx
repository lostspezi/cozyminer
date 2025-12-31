import {FaDiscord} from "react-icons/fa";
import {Navigate} from "react-router-dom";
import type {User} from "../../types/user.ts";
import LoginBg from "../../assets/images/login_bg.png";
import DarkModeToggle from "../../components/shared/dark-mode-toggle.tsx";
import {useTranslation} from "react-i18next";
import LanguageSwitch from "../../components/layout/header/language-switch.tsx";

type LoginProps = {
    user: User | null | undefined;
    darkMode: boolean;
    toggleDarkMode: () => void;
};

export default function LoginPage({
                                  user,
                                  darkMode,
                                  toggleDarkMode,
                              }: Readonly<LoginProps>) {
    const {t} = useTranslation("pages");
    const params = new URLSearchParams(globalThis.window.location.search);

    if (user) {
        return <Navigate to="/"/>;

    }

    const deleteParam = params.get("delete") === "true"

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
            <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} position="absolute"/>

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
                    {/* LANGUAGE SWITCH */}
                    <div className="flex justify-end mb-4">
                        <LanguageSwitch/>
                    </div>
                    {deleteParam &&
                        <div className="border-2 border-red-400 p-4 rounded-2xl text-red-400">
                            <p>{t('login.deleteSuccess')}</p>
                        </div>
                    }
                    <h1 className="text-center text-4xl font-semibold tracking-wide">
                        Cozy Miner
                    </h1>

                    <p className="text-center text-sm text-stone-600 dark:text-slate-400">
                        {t('login.subtext')}
                    </p>

                    <div className="space-y-3 text-sm leading-relaxed text-stone-700 dark:text-slate-300">
                        <p>
                            {t('login.descBlockOne')}
                        </p>
                        <p>
                            {t('login.descBlockTwo')}
                        </p>
                        <p>
                            {t('login.descBlockThree')}
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
                        {t('login.loginWithDiscord')}
                    </button>
                </div>
            </div>
        </div>
    );
}
