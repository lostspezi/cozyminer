import {createContext, useContext} from "react";

export type SnackbarData = {
    id: string;
    message: string;
    bgColor?: string;
};

export type SnackbarContextType = {
    push: (snackbar: Omit<SnackbarData, "id">) => void;
};

export const SnackbarContext = createContext<SnackbarContextType | null>(null);

export function useSnackbar() {
    const ctx = useContext(SnackbarContext);
    if (!ctx) {
        throw new Error("useSnackbar must be used inside SnackbarProvider");
    }
    return ctx;
}
