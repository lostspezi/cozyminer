import Title from "../../../components/shared/title.tsx";

export default function InventoryPage() {
    return (
        <>
            <Title
                headliner="Inventory"
                subtext="Manage your collected resources."
            />
            <h2 className="text-stone-600 dark:text-slate-300 font-bold text-xl mb-1">Equipment</h2>
            <div
                className="border-2 border-stone-600 dark:border-slate-300 rounded-lg p-2 flex flex-row gap-2 justify-between">
                <div>
                    <h3 className="text-stone-600 dark:text-slate-300 font-bold text-lg text-center mb-1">Helmet</h3>
                    <div className="w-20 h-20 bg-stone-600 dark:bg-slate-300 rounded-md"/>
                </div>
                <div>
                    <h3 className="text-stone-600 dark:text-slate-300 font-bold text-lg text-center mb-1">Gloves</h3>
                    <div className="w-20 h-20 bg-stone-600 dark:bg-slate-300 rounded-md"/>
                </div>
                <div>
                    <h3 className="text-stone-600 dark:text-slate-300 font-bold text-lg text-center mb-1">Tool</h3>
                    <div className="w-20 h-20 bg-stone-600 dark:bg-slate-300 rounded-md"/>
                </div>
            </div>
        </>
    );
}
