import Title from "../components/title.tsx";
import type {User} from "../types/user.ts";

type DashboardProps = {
    user: User;
}

export default function Dashboard({user}: Readonly<DashboardProps>) {
    return (
        <Title headliner="Dashboard" subtext={`Welcome back, ${user.username}!`}/>
    );
}