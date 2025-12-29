import type {IconType} from "react-icons";

export type MenuItem = {
    id: string;
    label: string;
    icon?: IconType;
    onClick?: () => void;
    danger?: boolean;
};
