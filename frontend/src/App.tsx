import {Route, Routes} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

import Login from "./pages/login";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Layout from "./components/Layout";
import type {User} from "./types/user";
import AccountSettings from "./pages/account-settings.tsx";
import NotFound from "./pages/not-found.tsx";

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

        // wichtig: toggle mit second arg, dann ist es garantiert korrekt
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

    if (loading) return <div>Loading...</div>;

    return (
        <Routes>
            <Route path="/login" element={<Login user={user} toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>}/>
            <Route path="*" element={<NotFound/>}/>

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
                    <Route path="/" element={<h1>Welcome back, {user?.username}!</h1>}/>
                    <Route path="/account-settings" element={<AccountSettings user={user!}/>}/>
                </Route>
            </Route>
        </Routes>
    );
}
