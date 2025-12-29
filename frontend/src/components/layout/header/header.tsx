import type {User} from "../../../types/user.ts";
import Nav from "./nav.tsx";

type HeaderProps = {
    user: User;
    darkMode: boolean;
    toggleDarkMode: () => void;
};

export default function Header({
                                   user,
                                   darkMode,
                                   toggleDarkMode
                               }: Readonly<HeaderProps>) {

    return (
        <header
            className="relative z-30 border-b border-stone-200 dark:border-slate-700 bg-stone-100 dark:bg-slate-800 px-6 py-4"
        >
            <Nav
                user={user}
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
            />
        </header>
    );
}