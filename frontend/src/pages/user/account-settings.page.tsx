import Title from "../../components/shared/title.tsx";
import {useTranslation} from "react-i18next";
import ConfirmDialog from "../../components/shared/confirm-dialog.tsx";
import {useState} from "react";
import axios from "axios";

export default function AccountSettingsPage() {
    const [open, setOpen] = useState<boolean>(false);
    const {t} = useTranslation("pages");

    const onConfirm = () => {
        setOpen(false);
        onDelete();
    };
    const onCancel = () => setOpen(false);

    const onDelete = () => {
        axios.delete("api/v1/users/me")
            .then(() => globalThis.window.location.reload())
            .catch(console.error);
    };

    return (
        <>
            <Title headliner={t('accountSettings.title')} subtext={t('accountSettings.subtext')}/>
            <h2 className="text-red-500 mt-4 font-bold text-xl mb-1">{t('accountSettings.dangerZone')}</h2>
            <div className="border-2 border-red-500 rounded-lg p-4">
                <p className="text-sm text-stone-600 dark:text-slate-300">{t('accountSettings.dangerZoneDesc')}</p>
                <button
                    onClick={() => setOpen(true)}
                    className="mt-2 p-2 rounded-lg bg-red-500 hover:bg-red-600 text-white cursor-pointer w-full">{t('accountSettings.deleteAccount')}
                </button>
            </div>
            <ConfirmDialog
                open={open}
                title={t('accountSettings.deleteAccount')}
                message={t('accountSettings.deleteAccountConfirm')}
                onConfirm={onConfirm}
                onCancel={onCancel}
            />
        </>
    );
}