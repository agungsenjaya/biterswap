import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Website",
        href: "https://t.me/Bitgertswap",
      },
      {
        label: "Community",
        href: "https://t.me/Bitgertswap",
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "https://t.me/Bitgertswap",
      },
      {
        label: "Troubleshooting",
        href: "https://t.me/Bitgertswap",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/pancakeswap",
      },
      {
        label: "Careers",
        href: "#",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: "Twitter",
    href: "#",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    href: "https://t.me/Bitgertswap",
  },
  {
    label: "Discord",
    icon: "Discord",
    href: "#",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
