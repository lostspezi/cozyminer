import type {User} from "../../types/user.ts";
import Header from "./header/header.tsx";
import Footer from "./footer/footer.tsx";
import Main from "./main/main.tsx";

type LayoutProps = {
    user: User;
    darkMode: boolean;
    toggleDarkMode: () => void;
};

export default function Layout({user, darkMode, toggleDarkMode}: Readonly<LayoutProps>) {
    return (
        <div
            className="
                flex h-screen flex-col
                bg-stone-50 dark:bg-slate-900
                text-stone-800 dark:text-slate-100
                overflow-hidden
            "
        >
            <Header user={user} darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>

            <Main/>

            <Footer/>

        </div>
    );
}
