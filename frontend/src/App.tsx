import {Route, Routes} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

import LoginPage from "./pages/user/login.page.tsx";
import ProtectedRoutes from "./routing/protected-routes.tsx";
import Layout from "./components/layout/layout.tsx";
import type {User} from "./types/user";
import AccountSettingsPage from "./pages/user/account-settings.page.tsx";
import NotFoundPage from "./pages/error/not-found.page.tsx";
import FullScreenLoader from "./components/loading/full-screen-loader.tsx";
import MinerPage from "./features/miner/miner.page.tsx";
import DashboardPage from "./pages/home/dashboard.page.tsx";
import NewsPage from "./pages/news/news.page.tsx";
import ContactPage from "./pages/contact/contact.page.tsx";
import ImprintPage from "./pages/imprint/imprint.page.tsx";
import PrivacyPolicyPage from "./pages/privacypolicy/privacy-policy.page.tsx";
import InventoryPage from "./pages/inventory/inventory.page.tsx";

const THEME_KEY = "cozy-theme";

export default function App() {
    const [user, setUser] = useState<User | null | undefined>(undefined);
    const [loading, setLoading] = useState(true);

    const [darkMode, setDarkMode] = useState<boolean>(() => {
        return localStorage.getItem(THEME_KEY) === "dark";
    });

    const toggleDarkMode = () => setDarkMode((prev) => !prev);

    useEffect(() => {
        const root = document.documentElement;

        root.classList.toggle("dark", darkMode);

        localStorage.setItem(THEME_KEY, darkMode ? "dark" : "light");
    }, [darkMode]);

    useEffect(() => {
        axios
            .get("/api/auth/me")
            .then((res) => setUser(res.data))
            .catch(() => setUser(null))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <FullScreenLoader/>;

    return (
        <Routes>
            <Route path="/login"
                   element={<LoginPage user={user} toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>}/>
            <Route path="*" element={<NotFoundPage/>}/>

            <Route element={<ProtectedRoutes user={user}/>}>
                <Route
                    element={
                        <Layout
                            user={user!}
                            darkMode={darkMode}
                            toggleDarkMode={toggleDarkMode}
                        />
                    }
                >
                    <Route path="/" element={<DashboardPage user={user!}/>}/>
                    <Route path="/account-settings" element={<AccountSettingsPage/>}/>
                    <Route path="/miner" element={<MinerPage/>}/>
                    <Route path="/news" element={<NewsPage/>}/>
                    <Route path="/contact" element={<ContactPage/>}/>
                    <Route path="/imprint" element={<ImprintPage/>}/>
                    <Route path="/privacy-policy" element={<PrivacyPolicyPage/>}/>
                    <Route path="/inventory" element={<InventoryPage/>}/>
                </Route>
            </Route>
        </Routes>
    );
}
