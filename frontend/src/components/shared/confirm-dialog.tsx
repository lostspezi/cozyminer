import {useTranslation} from "react-i18next";

type ConfirmDialogProps = {
    open: boolean;
    title: string;
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
};

export default function ConfirmDialog({
                                          open,
                                          title,
                                          message,
                                          onConfirm,
                                          onCancel,
                                      }: Readonly<ConfirmDialogProps>) {
    const {t} = useTranslation("common")
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="w-full max-w-sm rounded-2xl bg-white dark:bg-slate-800 p-6 shadow-xl space-y-4">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-stone-600 dark:text-slate-300">
                    {message}
                </p>

                <div className="flex justify-end gap-3 pt-2">
                    <button
                        onClick={onCancel}
                        className="px-4 py-2 rounded-lg hover:bg-stone-100 dark:hover:bg-slate-700 cursor-pointer"
                    >
                        {t('cancel')}
                    </button>

                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white cursor-pointer"
                    >
                        {t('confirm')}
                    </button>
                </div>
            </div>
        </div>
    );
}
