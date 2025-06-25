import React, { useState, useRef } from "react";
import { Link, usePathname } from "@/i18n/routing";
import { useLocale } from "next-intl";
import Image from "next/image";

export default function LanguageSelect() {

  const locale = useLocale();

  const pathname = usePathname();

  const languageData = {
    pt: {
      name: "Pt-Br",
      flag: "/assets/images/flags/br-flag.webp"
    },
    en: {
      name: "En",
      flag: "/assets/images/flags/usa-flag.webp"
    }
  };

  const handleHover = (isOpen) => {
    setIsDropdownOpen(isOpen);
  };

  // State to manage dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Handle language selection
  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false); // Close dropdown after selecting a language
  };

  return (
    <li className="languageSelect"
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
    >
      <a
        href="#"
        className="mn-has-sub opacity-1 flex items-center gap-2"
      >
        {/* Bandeira atual */}
        <Image
          src={languageData[locale]?.flag || "/assets/images/flags/br-flag.webp"}
          width={18}
          height={12}
          alt="Current language"
          className="w-6 h-auto"
        />
        &nbsp;&nbsp;
        {/* Ícone com rotação no hover */}
        <i className={`mi-chevron-down transition-transform duration-200 ${isDropdownOpen ? "rotate-180 mobile-sub-active" : ""}`} />
      </a>

      {/* Dropdown menu with sliding effect */}
      <ul
        className={`mn-sub to-left ${isDropdownOpen ? "open" : "closed"}`}
        ref={dropdownRef}
      >
        <li>
          <Link 
            href={pathname} 
            locale="en" 
            className="flex items-center gap-3 px-4 py-2"
          >
            <Image
              src="/assets/images/flags/usa-flag.webp"
              width={18}
              height={12}
              alt="English"
              className="w-6 h-auto"
            />&nbsp;&nbsp;
            <span>English</span>
          </Link>
        </li>
        <li>
          <Link 
            href={pathname} 
            locale="pt" 
            className="flex items-center gap-3 px-4 py-2"
          >
            <Image
              src="/assets/images/flags/br-flag.webp"
              width={18}
              height={12}
              alt="Português"
              className="w-6 h-auto"
            />&nbsp;&nbsp;
            <span>Português</span>
          </Link>
        </li>
        {/* <li>
          <a href="#" onClick={() => handleLanguageSelect("De")}>
            German
          </a>
        </li> */}
      </ul>
    </li>
  );
}
