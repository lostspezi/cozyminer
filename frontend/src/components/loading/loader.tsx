import {GiMiner} from "react-icons/gi";

export const COZY_MESSAGES = [
    "Lighting the lanterns…",
    "Preparing the mine entrance…",
    "Sharpening pickaxes…",
    "Checking the support beams…",
    "Warming up the smelter…",
    "Gathering tools and supplies…",
    "The mine is slowly waking up…",
    "Dust settles in the tunnels…",
] as const;

export const RANDOM_COZY_MESSAGE =
    COZY_MESSAGES[Math.floor(Math.random() * COZY_MESSAGES.length)];

type LoaderProps = {
    size?: number;
    message?: string;
};

export default function Loader({size = 48, message}: Readonly<LoaderProps>) {
    return (
        <div className="flex flex-col items-center justify-center gap-4 text-stone-600 dark:text-slate-300">
            <div
                className="
          animate-miner-spin
          text-emerald-500 dark:text-emerald-400
          drop-shadow-[0_0_6px_rgba(16,185,129,0.35)]
        "
                style={{fontSize: size}}
            >
                <GiMiner/>
            </div>

            <span className="text-sm tracking-wide text-center">
        {message || RANDOM_COZY_MESSAGE}
      </span>
        </div>
    );
}
