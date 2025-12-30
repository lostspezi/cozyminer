import Title from "../../components/shared/title";
import MineCard from "../../features/miner/components/mine-card";
import {ORES} from "./config/ore.config.ts";
import type {Mine} from "./types/mine.type.ts";

const MOCK_MINES: Mine[] = [
    {
        id: "mine-iron-1",
        ore: ORES.iron,
        level: 1,
        progressPercent: 40,
        yieldPerAction: 1,
        upgradeCost: 10,
    },
    {
        id: "mine-iron-2",
        ore: ORES.iron,
        level: 5,
        progressPercent: 89,
        yieldPerAction: 1,
        upgradeCost: 10,
    },
    {
        id: "mine-iron-3",
        ore: ORES.iron,
        level: 1,
        progressPercent: 40,
        yieldPerAction: 1,
        upgradeCost: 10,
    },
    {
        id: "mine-iron-4",
        ore: ORES.iron,
        level: 1,
        progressPercent: 40,
        yieldPerAction: 1,
        upgradeCost: 10,
    },
];

export default function MinerPage() {
    return (
        <div className="space-y-6">
            <Title
                headliner="Your Mines"
                subtext="Manage your mines and extract valuable resources."
            />

            <div
                className="
          grid gap-6
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
        "
            >
                {MOCK_MINES.map((mine) => (
                    <MineCard key={mine.id} mine={mine}/>
                ))}
            </div>
        </div>
    );
}
