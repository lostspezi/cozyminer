import type {MinerResponse} from "../types/mine.type.ts";

type Props = {
    mine: MinerResponse;
};

export default function MineCard({mine}: Readonly<Props>) {
    return (
        <div
            className="
        rounded-2xl
        border border-stone-200 dark:border-slate-700
        bg-white dark:bg-slate-800
        shadow-sm
        p-4
        space-y-3
      "
        >
            {mine.oreType}
        </div>
    );
}
