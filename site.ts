import { LinkItem } from "./lib/types";

export const links: LinkItem[] = [
  // { id: 0, name: "Home", to: "#" },
  {
    id: 1,
    name: "About Us",
    to: "/#about",
  },
  { id: 2, name: "How It Works", to: "/#how-it-works" },
  { id: 3, name: "Why Us?", to: "/#why-us" },

  { id: 4, name: "Products", to: "/#products" },
  { id: 5, name: "Contact", to: "/#contact" },

  // { id: 3, name: "Search", to: "/search" },
];

export interface NavigationLink {
  name: string;
  value: string;
  href: string;
}

export const navigationLinks: NavigationLink[] = [
  { name: "About", value: "about", href: "#about" },
  { name: "Features", value: "features", href: "#features" },
  { name: "Services", value: "services", href: "#services" },
  { name: "Contact", value: "contact", href: "#contact" },
];
