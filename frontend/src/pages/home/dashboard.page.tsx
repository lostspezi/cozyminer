import Title from "../../components/shared/title.tsx";
import type {User} from "../../types/user.ts";

type DashboardProps = {
    user: User;
}

export default function DashboardPage({user}: Readonly<DashboardProps>) {
    return (
        <Title headliner="DashboardPage" subtext={`Welcome back, ${user.username}!`}/>
    );
}