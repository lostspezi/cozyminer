import type {User} from "../types/user.ts";

type AccountSettingsProps = {
    user: User;
};
export default function AccountSettings({user}: Readonly<AccountSettingsProps>) {
    return (
        <div>Account Settings for {user.username}</div>
    );
}