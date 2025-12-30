import * as React from "react";
import {useCallback, useMemo, useState} from "react";
import Snackbar from "./snackbar";
import {SnackbarContext, type SnackbarData} from "./snackbar-context";

export function SnackbarProvider({
                                     children,
                                 }: Readonly<{ children: React.ReactNode }>) {
    const [snackbars, setSnackbars] = useState<SnackbarData[]>([]);

    const push = useCallback((snackbar: Omit<SnackbarData, "id">) => {
        const item: SnackbarData = {
            ...snackbar,
            id: crypto.randomUUID(),
        };

        setSnackbars((prev) => [...prev, item]);
    }, []);

    const remove = useCallback((id: string) => {
        setSnackbars((prev) => prev.filter((s) => s.id !== id));
    }, []);

    const value = useMemo(() => ({push}), [push]);

    return (
        <SnackbarContext.Provider value={value}>
            {children}
            <div className="fixed top-6 right-6 z-50 flex flex-col gap-3 pointer-events-none max-w-sm">
                {snackbars.map((snackbar) => (
                    <Snackbar
                        key={snackbar.id}
                        message={snackbar.message}
                        bgColor={snackbar.bgColor}
                        onClose={() => remove(snackbar.id)}
                    />
                ))}
            </div>
        </SnackbarContext.Provider>
    );
}