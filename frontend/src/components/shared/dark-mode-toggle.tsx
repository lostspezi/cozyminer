import {HiMoon, HiSun} from "react-icons/hi";

type DarkModeToggleProps = {
    darkMode: boolean;
    toggleDarkMode: () => void;
    position?: string;
};

export default function DarkModeToggle({darkMode, toggleDarkMode, position}: Readonly<DarkModeToggleProps>) {
    return (
        <button
            onClick={toggleDarkMode}
            className={`
          ${position || ""} top-6 right-6 z-30
          rounded-full p-2
          bg-white/80 dark:bg-slate-800/80
          hover:bg-white dark:hover:bg-slate-700
          transition-colors cursor-pointer
        `}
            aria-label="Toggle dark mode"
        >
            {darkMode ? <HiSun size={20}/> : <HiMoon size={20}/>}
        </button>
    );
}