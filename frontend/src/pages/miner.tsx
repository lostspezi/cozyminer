import {GiMineWagon, GiStoneBlock} from "react-icons/gi";
import {HiArrowUp} from "react-icons/hi";
import Title from "../components/title.tsx";

export default function Miner() {
    return (
        <div className="space-y-6">
            {/* PAGE TITLE */}
            <Title headliner="Your Mines" subtext="Manage your mines and extract valuable resources."/>

            {/* MINES GRID */}
            <div
                className="
          grid gap-6
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
        "
            >
                <IronMineCard/>
            </div>
        </div>
    );
}

function IronMineCard() {
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
            {/* HEADER */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div
                        className="
              flex h-10 w-10 items-center justify-center
              rounded-lg
              bg-stone-200 dark:bg-slate-700
              text-stone-700 dark:text-slate-200
            "
                    >
                        <GiStoneBlock size={22}/>
                    </div>

                    <div>
                        <h2 className="font-medium">
                            Iron Mine
                        </h2>
                        <span className="text-xs text-stone-500 dark:text-slate-400">
                            Iron Ore
                        </span>
                    </div>
                </div>

                {/* LEVEL */}
                <div className="text-right">
                    <span className="text-[10px] uppercase tracking-wide text-stone-500 dark:text-slate-400">
                        Lvl
                    </span>
                    <div className="text-lg font-semibold">
                        1
                    </div>
                </div>
            </div>

            {/* PROGRESS */}
            <div className="space-y-1">
                <div className="flex justify-between text-[11px] text-stone-500 dark:text-slate-400">
                    <span>Progress</span>
                    <span>40%</span>
                </div>

                <div className="h-2 w-full rounded-full bg-stone-200 dark:bg-slate-700 overflow-hidden">
                    <div className="h-full w-[40%] bg-emerald-500 transition-all"/>
                </div>
            </div>

            {/* ACTIONS */}
            <div className="flex gap-2">
                <button
                    className="
            flex-1
            flex items-center justify-center gap-2
            rounded-lg
            bg-emerald-500 hover:bg-emerald-600
            text-white
            py-1.5
            text-sm
            transition-colors
            cursor-pointer
          "
                >
                    <GiMineWagon size={18}/>
                    Mine
                </button>

                <button
                    className="
            flex-1
            flex items-center justify-center gap-2
            rounded-lg
            border border-stone-300 dark:border-slate-600
            bg-stone-100 dark:bg-slate-700
            hover:bg-stone-200 dark:hover:bg-slate-600
            text-stone-700 dark:text-slate-200
            py-1.5
            text-sm
            transition-colors
            cursor-pointer
          "
                >
                    <HiArrowUp size={18}/>
                    Upgrade
                </button>
            </div>

            {/* FOOTER */}
            <div className="flex justify-between text-[11px] text-stone-500 dark:text-slate-400">
                <span>+1 Iron / click</span>
                <span>Cost: 10 Iron</span>
            </div>
        </div>
    );
}
