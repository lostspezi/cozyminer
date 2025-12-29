import type {MenuItem} from "../../../../configs/navigation/account/account-menu-item.type.ts";

type MenuProps = {
    items: MenuItem[];
};

export default function Menu({items}: Readonly<MenuProps>) {
    return (
        <ul className="py-1">
            {items.map((item) => {
                const Icon = item.icon;

                return (
                    <li key={item.id}>
                        <button
                            onClick={item.onClick}
                            className={`
                flex w-full items-center gap-2 px-4 py-2 text-sm
                transition-colors cursor-pointer
                ${
                                item.danger
                                    ? "text-red-600 dark:text-red-500 hover:bg-red-50 dark:hover:bg-slate-600"
                                    : "hover:bg-stone-100 dark:hover:bg-slate-600"
                            }
              `}
                        >
                            {Icon && <Icon className="h-4 w-4"/>}
                            {item.label}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
}
