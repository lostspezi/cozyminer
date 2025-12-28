import {Route, Routes} from 'react-router-dom';
import Login from "./pages/login.tsx";
import {useEffect, useState} from "react";
import type {User} from "./types/user.ts";
import axios from "axios";
import ProtectedRoutes from "./components/ProtectedRoutes.tsx";

export default function App() {
    const [user, setUser] = useState<User | null | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchMe = async () => {
        return axios.get("/api/auth/me");
    }

    const logout = () => {
        globalThis.window.location.href = "http://localhost:8080/logout";
    }

    useEffect(() => {
        fetchMe()
            .then(res => setUser(res.data))
            .catch(() => setUser(null))
            .finally(() => setLoading(false));
    }, [])

    if (loading) return <div>Loading...</div>;

    return (
        <Routes>
            <Route element={<ProtectedRoutes user={user}/>}>
                <Route path="/" element={<><h1>Welcome back, {user?.username}!</h1>
                    <button onClick={logout} className="cursor-pointer">LOGOUT</button>
                </>}/>
            </Route>
            <Route path="/login" element={<Login user={user}/>}/>
        </Routes>
    );
}
