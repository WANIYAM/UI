import React from "react";
import { NavButton } from "../common/NavButton";

interface MenuProps {
  activePage?: string;
}

export const Menu: React.FC<MenuProps> = ({ activePage = "Home" }) => {
  const links = [
    { name: "About us", href: "#about", bg: "var(--color-light)" },
    { name: "Agenda", href: "#agenda", bg: "var(--color-light)" },
    { name: "Speakers", href: "#speakers", bg: "var(--color-light)" },
    { name: "Sponsors", href: "#sponsors", bg: "var(--color-light-salmon)" },
    { name: "Tickets", href: "#tickets", bg: "var(--color-kiwi)" },
    { name: "FAQ", href: "#faq", bg: "var(--color-selective-yellow)" },
  ];

  return (
    <nav style={{ display: "flex", gap: 8, alignItems: "center" }}>
      {links.map((link) => (
        <NavButton
          key={link.name}
          navText={link.name}
          bgColor={link.bg}
          link={link.href}
          active={activePage === link.name}
        />
      ))}
    </nav>
  );
};