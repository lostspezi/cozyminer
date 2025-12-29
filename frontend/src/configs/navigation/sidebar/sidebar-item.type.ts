import type {IconType} from "react-icons";

export type SidebarItem = {
    id: string;
    labelKey: string;
    to: string;
    icon: IconType;
    locked?: boolean;
    disabled?: boolean;
    titleKey?: string;
};
