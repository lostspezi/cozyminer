import type {User} from "../types/user.ts";
import {Navigate, Outlet} from "react-router-dom";

type ProtectedRoutesProps = {
    user: User | null | undefined
}
export default function ProtectedRoutes({user}: Readonly<ProtectedRoutesProps>) {
    return user ? <Outlet/> : <Navigate to="/login"/>;
}