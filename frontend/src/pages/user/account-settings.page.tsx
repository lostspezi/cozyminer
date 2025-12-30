import Title from "../../components/shared/title.tsx";
import {useTranslation} from "react-i18next";
import ConfirmDialog from "../../components/shared/confirm-dialog.tsx";
import * as React from "react";
import {useState} from "react";
import axios from "axios";
import type {User} from "../../types/user.ts";
import {useSnackbar} from "../../components/shared/snackbar/snackbar-context.tsx";
import Loader from "../../components/loading/loader.tsx";

const ALLOWED_CHARACTERS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-.";

type AccountSettingsProps = {
    user: User;
    setOnUpdate: (user: User) => void;
}

export default function AccountSettingsPage({user, setOnUpdate}: Readonly<AccountSettingsProps>) {
    const [openDeleteConfirmDialog, setOpenDeleteConfirmDialog] = useState<boolean>(false);
    const [openUpdateConfirmDialog, setOpenUpdateConfirmDialog] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [username, setUsername] = useState<string>(user.username);
    const [email, setEmail] = useState<string>(user.email);
    const {t} = useTranslation("pages");
    const {push} = useSnackbar();

    const isUsernameValid: boolean = username.length >= 3 && username.length <= 32 && username.split("").every(c => ALLOWED_CHARACTERS.includes(c));
    const isEmailValid: boolean = email.length >= 3 && email.length <= 64 && email.includes("@") && email.includes(".");
    const isUsernameEmailSame: boolean = username === user.username && email === user.email;

    const onConfirmDelete = () => {
        setOpenDeleteConfirmDialog(false);
        onDelete();
    };
    const onCancelDelete = () => setOpenDeleteConfirmDialog(false);

    const onConfirmUpdate = () => {
        setOpenUpdateConfirmDialog(false);
        onUpdate();
    };
    const onCancelUpdate = () => setOpenUpdateConfirmDialog(false);

    const onDelete = () => {
        axios.delete("api/v1/users/me")
            .then(() => globalThis.window.location.reload())
            .catch(console.error);
    };

    const onUpdate = () => {
        setLoading(true);
        axios.put("/api/v1/users", {username, email})
            .then((res) => {
                setOnUpdate(res.data)
                push({message: t('accountSettings.success')})
            })
            .catch((e) => {
                console.error(e);
                push({message: t('accountSettings.error'), bgColor: "bg-red-500"});
            })
            .finally(() => setLoading(false));
    }

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);

    let updateBtnText: string = t('accountSettings.update');
    if (!isUsernameValid) updateBtnText = t('accountSettings.invalidUsername');
    if (!isEmailValid) updateBtnText = t('accountSettings.invalidEmail');
    if (!isUsernameValid && !isEmailValid) updateBtnText = t('accountSettings.invalidUsernameEmail');
    if (isUsernameEmailSame) updateBtnText = t('accountSettings.noChanges');

    if (loading) {
        return (
            <div className="flex items-center justify-center h-full">
                <Loader message={t('accountSettings.loading')}/>
            </div>
        );
    }

    return (
        <>
            <Title headliner={t('accountSettings.title')} subtext={t('accountSettings.subtext')}/>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                <div>
                    <h2 className="text-stone-600 dark:text-slate-300 mt-4 font-bold text-xl mb-1">{t('accountSettings.account')}</h2>
                    <div className="border-2 border-stone-600 dark:border-slate-300 rounded-lg p-4">
                        <label htmlFor="username"
                               className="block mb-1 font-medium">{t('accountSettings.username')}</label>
                        <input onChange={handleUsernameChange} id="username" type="text"
                               className={`w-full p-2 border rounded-lg`} placeholder={t('accountSettings.username')}
                               value={username}/>
                        {isUsernameValid &&
                            <p className="text-stone-600 dark:text-slate-300 text-right mt-1">{username.length} /
                                32</p>}
                        {!isUsernameValid &&
                            <p className="text-red-500 mt-1">{t('accountSettings.usernameError')}</p>}

                        <label htmlFor="email"
                               className="block mb-1 mt-2 font-medium">{t('accountSettings.email')}</label>
                        <input onChange={handleEmailChange} id="email" type="text"
                               className="w-full p-2 border rounded-lg"
                               placeholder={t('accountSettings.email')}
                               value={email}/>
                        {isEmailValid &&
                            <p className="text-stone-600 dark:text-slate-300 text-right mt-1">{email.length} /
                                64</p>}
                        {!isEmailValid &&
                            <p className="text-red-500 mt-1">{t('accountSettings.emailError')}</p>}

                        <button
                            type="button"
                            onClick={() => setOpenUpdateConfirmDialog(true)}
                            disabled={!isUsernameValid || !isEmailValid || isUsernameEmailSame}
                            className="mt-4 p-2 rounded-lg bg-emerald-500 text-white hover:bg-stone-200 dark:hover:bg-slate-700 cursor-pointer w-full disabled:bg-stone-300 disabled:cursor-not-allowed disabled:text-stone-600 disabled:dark:hover:bg-stone-300">
                            {updateBtnText}
                        </button>
                    </div>
                </div>
                <div>
                    <h2 className="text-red-500 mt-4 font-bold text-xl mb-1">{t('accountSettings.dangerZone')}</h2>
                    <div className="border-2 border-red-500 rounded-lg p-4">
                        <p className="text-sm text-stone-600 dark:text-slate-300">{t('accountSettings.dangerZoneDesc')}</p>
                        <button
                            onClick={() => setOpenDeleteConfirmDialog(true)}
                            className="mt-2 p-2 rounded-lg bg-red-500 hover:bg-red-600 text-white cursor-pointer w-full">{t('accountSettings.deleteAccount')}
                        </button>
                    </div>
                </div>
            </div>
            <ConfirmDialog
                open={openDeleteConfirmDialog}
                title={t('accountSettings.deleteAccount')}
                message={t('accountSettings.deleteAccountConfirm')}
                onConfirm={onConfirmDelete}
                onCancel={onCancelDelete}
            />
            <ConfirmDialog
                open={openUpdateConfirmDialog}
                title={t('accountSettings.updateAccount')}
                message={t('accountSettings.updateAccountConfirm')}
                onConfirm={onConfirmUpdate}
                onCancel={onCancelUpdate}
            />
        </>
    );
}