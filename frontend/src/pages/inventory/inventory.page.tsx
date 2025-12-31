import Title from "../../components/shared/title";
import type {User} from "../../types/user";
import InventoryCategory from "./inventory-category";
import {GiOre} from "react-icons/gi";

type InventoryPageProps = {
    user: User;
};

export default function InventoryPage({user}: Readonly<InventoryPageProps>) {
    const {inventory} = user.playerProfile;

    const usedSlots = Object.values(inventory.items).reduce(
        (sum, v) => sum + (v ?? 0),
        0
    );

    const percent = Math.min(
        100,
        Math.round((usedSlots / inventory.capacity) * 100)
    );

    return (
        <div className="space-y-6">
            <Title
                headliner="Inventory"
                subtext="Manage your collected resources."
            />

            {/* CAPACITY */}
            <div
                className="rounded-xl border border-stone-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4 space-y-2">
                <div className="flex justify-between text-sm text-stone-500 dark:text-slate-400">
                    <span>Capacity</span>
                    <span>
                        {usedSlots} / {inventory.capacity}
                    </span>
                </div>

                <div className="h-3 rounded-full bg-stone-200 dark:bg-slate-700 overflow-hidden">
                    <div
                        className="h-full bg-emerald-500 transition-all"
                        style={{width: `${percent}%`}}
                    />
                </div>
            </div>

            {/* CATEGORIES */}
            <InventoryCategory
                title="Ore"
                icon={GiOre}
                items={[
                    {
                        id: "iron",
                        name: "Iron Ore",
                        amount: inventory.items.IRON_ORE ?? 0,
                    },
                    {
                        id: "copper",
                        name: "Copper Ore",
                        amount: inventory.items.COPPER_ORE ?? 0,
                    },
                    {
                        id: "coal",
                        name: "Coal",
                        amount: inventory.items.COAL ?? 0,
                    },
                ]}
            />
        </div>
    );
}
