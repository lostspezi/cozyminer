import type {IconType} from "react-icons";

export type SidebarItem = {
    id: string;
    label: string;
    to: string;
    icon: IconType;
    locked?: boolean;
    disabled?: boolean;
    title?: string;
};
