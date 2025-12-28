import {Route, Routes} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

import Login from "./pages/login";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Layout from "./components/Layout";
import type {User} from "./types/user";
import AccountSettings from "./pages/account-settings.tsx";

export default function App() {
    const [user, setUser] = useState<User | null | undefined>(undefined);
    const [loading, setLoading] = useState(true);

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
            {/* Öffentliche Route */}
            <Route path="/login" element={<Login user={user}/>}/>

            {/* Geschützte Routes */}
            <Route element={<ProtectedRoutes user={user}/>}>
                <Route element={<Layout user={user!}/>}>
                    <Route
                        path="/"
                        element={<h1>Welcome back, {user?.username}!</h1>}
                    />
                    <Route path="/account-settings" element={<AccountSettings user={user!}/>}/>
                </Route>
            </Route>
        </Routes>
    );
}
