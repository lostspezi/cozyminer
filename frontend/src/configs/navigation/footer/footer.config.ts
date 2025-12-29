import type {FooterItem} from "./footer-item.type";

export const FOOTER_ITEMS: FooterItem[] = [
    {
        id: "contact",
        labelKey: "footer.contact",
        to: "/contact",
    },
    {
        id: "imprint",
        labelKey: "footer.imprint",
        to: "/imprint",
    },
    {
        id: "privacy",
        labelKey: "footer.privacyPolicy",
        to: "/privacy-policy",
    },
];
