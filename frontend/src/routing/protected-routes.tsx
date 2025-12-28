import type {User} from "../types/user.ts";
import {Navigate, Outlet} from "react-router-dom";

type ProtectedRoutesProps = {
    user: User | null | undefined;
};

export default function ProtectedRoutes({user}: Readonly<ProtectedRoutesProps>) {
    if (user === undefined) return null;

    return user ? <Outlet/> : <Navigate to="/login" replace/>;
}
