import type {IconType} from "react-icons";

export type MenuItem = {
    id: string;
    labelKey: string;
    icon?: IconType;
    onClick?: () => void;
    danger?: boolean;
};
