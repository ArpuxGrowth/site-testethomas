"use client";
import { init_classic_menu_resize } from "@/utlis/menuToggle";
import { scrollToElement } from "@/utlis/scrollToElement";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Nav3({ links }) {
  const [menuOpen, setMenuOpen] = useState([-1, -1]);
  const toggleParent1 = (i) => {
    const tempMenuOpen = [...menuOpen];
    if (menuOpen[0] === i) {
      tempMenuOpen[0] = -1;
    } else {
      tempMenuOpen[0] = i;
    }
    setMenuOpen(tempMenuOpen);
  };

  const pathname = usePathname();

  // Lista de abas que não devem ter submenus
  const noSubMenuTitles = ["Início", "Imprensa", "Pacientes no Exterior", "Cirurgias", "Antes e Depois"];

  useEffect(() => {
    setTimeout(() => {
      scrollToElement();
    }, 1000);
    init_classic_menu_resize();
    window.addEventListener("resize", init_classic_menu_resize);
    return () => {
      window.removeEventListener("resize", init_classic_menu_resize);
    };
  }, []);

  return (
    <>
      {links.map((item, index) => (
        <li key={index} className={menuOpen[0] === index ? "js-opened" : ""}>
          <Link
            href={item.subMenu && noSubMenuTitles.includes(item.title) ? item.subMenu[0].links[0].href : "#"}
            className={`mn-has-sub ${
              item.subMenu &&
              Array.isArray(item.subMenu) &&
              item.subMenu.some(
                (e1) =>
                  e1.links &&
                  Array.isArray(e1.links) &&
                  e1.links.some(
                    (e2) =>
                      e2.href && pathname.split("/")[1] === e2.href.split("/")[1]
                  )
              )
                ? "active"
                : ""
            }`}
          >
            {item.title}
          </Link>
          {item.subMenu && !noSubMenuTitles.includes(item.title) && (
            <ul
              className={`mn-sub mn-has-multi ${
                menuOpen[0] === index ? "mobile-sub-active" : ""
              }`}
            >
              {item.subMenu.map((subItem, subIndex) => (
                <li className="mn-sub-multi" key={subIndex}>
                  {subItem.title && (
                    <span className="mn-group-title">{subItem.title}</span>
                  )}
                  <ul>
                    {subItem.links &&
                      subItem.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link
                            className={
                              pathname.split("/")[1] ===
                              link.href.split("/")[1]
                                ? "active"
                                : ""
                            }
                            href={link.href}
                          >
                            {link.icon && <i className={link.icon} />}{" "}
                            {link.text}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </>
  );
}
