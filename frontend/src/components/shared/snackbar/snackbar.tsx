import {useCallback, useEffect, useRef, useState} from "react";
import type {IconType} from "react-icons";
import {GiInfo} from "react-icons/gi";
import {IoClose} from "react-icons/io5";

type SnackbarProps = {
    message: string;
    bgColor?: string;
    icon?: IconType;
    duration?: number;
    onClose?: () => void;
};

const EXIT_ANIMATION_MS = 420;
const TICK = 50;

export default function Snackbar({
                                     message,
                                     bgColor = "bg-emerald-500",
                                     icon: Icon = GiInfo,
                                     duration = 5000,
                                     onClose,
                                 }: Readonly<SnackbarProps>) {
    const [visible, setVisible] = useState(true);
    const [closing, setClosing] = useState(false);
    const [remaining, setRemaining] = useState(duration);
    const [hovered, setHovered] = useState(false);

    const intervalRef = useRef<number | null>(null);

    const close = useCallback(() => {
        if (closing) return;
        setClosing(true);

        setTimeout(() => {
            setVisible(false);
            onClose?.();
        }, EXIT_ANIMATION_MS);
    }, [closing, onClose]);

    useEffect(() => {
        if (hovered || closing) return;

        intervalRef.current = globalThis.setInterval(() => {
            setRemaining((r) => {
                if (r <= TICK) {
                    close();
                    return 0;
                }
                return r - TICK;
            });
        }, TICK);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, [hovered, closing, close]);

    if (!visible) return null;

    const progress = (remaining / duration) * 100;

    return (
        <output
            aria-live="polite"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`
        ${bgColor}
        text-white
        rounded-xl
        shadow-2xl
        ring-1 ring-white/20
        backdrop-blur-md
        w-full
        overflow-hidden
        pointer-events-auto
        ${closing ? "animate-snackbar-out" : "animate-snackbar-in"}
    `}
        >

            {/* CONTENT */}
            <div className="flex items-center gap-3 px-4 py-3">
                <Icon className="h-6 w-6 shrink-0 opacity-90" aria-hidden="true"/>

                <p className="text-sm leading-snug flex-1">
                    {message}
                </p>

                <button
                    type="button"
                    onClick={close}
                    aria-label="Close notification"
                    className="rounded-md p-1 hover:bg-white/20 transition-colors cursor-pointer"
                >
                    <IoClose className="h-4 w-4"/>
                </button>
            </div>

            {/* TIMER BAR */}
            <div className="h-1 w-full bg-white/20">
                <progress
                    className="h-full bg-white/70 transition-[width] duration-50 ease-linear"
                    style={{width: `${progress}%`}}
                    aria-valuenow={Math.round(progress)}
                    aria-valuemin={0}
                    aria-valuemax={100}
                />
            </div>
        </output>
    );
}