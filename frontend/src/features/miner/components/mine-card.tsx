import type {MinerResponse} from "../types/mine.type.ts";
import axios from "axios";

type Props = {
    mine: MinerResponse;
};

export default function MineCard({mine}: Readonly<Props>) {
    const startMining = async () => {
        await axios.post(`/api/mining/start?minerId=${mine.id}`)
    }

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
            <button type="button" className="ml-4 border-2 rounded-2xl cursor-pointer p-4" onClick={startMining}>Start mining</button>
        </div>
    );
}
