import type {FooterItem} from "../../../configs/navigation/footer/footer-item.type.ts";

type Props = {
    item: FooterItem;
    onNavigate: (to: string) => void;
};

export default function FooterNavItem({
                                          item,
                                          onNavigate,
                                      }: Readonly<Props>) {
    return (
        <button
            onClick={() => onNavigate(item.to)}
            className="
        hover:text-stone-800 dark:hover:text-slate-200
        transition-colors cursor-pointer
      "
        >
            {item.label}
        </button>
    );
}
