"use client";
import { toggleMobileMenu } from "@/utlis/toggleMobileMenu";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Nav3 from "./components/Nav3";
import LanguageSelect from "./components/LanguageSelect";

export default function Header1Multipage({ links, defaultButtonColor = "white" }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [buttonColor, setButtonColor] = useState(defaultButtonColor);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      const script = document.createElement("script");
      script.src = "//js.hsforms.net/forms/embed/v2.js";
      script.async = true;
      script.onload = () => {
        if (window.hbspt) {
          window.hbspt.forms.create({
            portalId: "43984996",
            formId: "d1ae94a9-fc3d-4747-9fbd-01519b8f7d7b",
            target: "#hubspot-form",
          });
        }
      };
      document.body.appendChild(script);
    }
  }, [isModalOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY; // Obtém a posição do scroll
      setIsScrolled(offset > 1); // Considera "scrolled" quando o offset é maior que 1px
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Detecta se o dispositivo é móvel com base na largura da janela
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024); // Considere dispositivos móveis como largura <= 1024px
    };

    handleResize(); // Chamada inicial para definir o estado com base no tamanho atual
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Atualiza a cor do botão apenas se não estiver em um dispositivo móvel
    if (isMobile) {
      setButtonColor("white");
    } else if (isScrolled) {
      setButtonColor("black");
    } else {
      setButtonColor(defaultButtonColor);
    }
  }, [isScrolled, defaultButtonColor, isMobile]);

  return (
    <div className="main-nav-sub full-wrapper">
      <div className="nav-logo-wrap local-scroll">
        <Link href={`/main-one-page`} className="logo">
          <Image
            src="/assets/images/logo-drthomas.png"
            alt="Logo do Dr. Thomas Benson"
            width={105}
            height={34}
            className="light-mode-logo"
          />
          <Image
            src="/assets/images/logo-drthomas-dark.png"
            alt="Logo do Dr. Thomas Benson"
            width={105}
            height={34}
            className="dark-mode-logo"
          />
        </Link>
      </div>
      <div
        onClick={toggleMobileMenu}
        className="mobile-nav"
        role="button"
        tabIndex={0}
      >
        <i className="mobile-nav-icon" />
        <span className="visually-hidden">Menu</span>
      </div>
      <div className="inner-nav desktop-nav">
        <ul className="clearlist local-scroll">
          <Nav3 links={links} />
        </ul>
        <ul className="items-end clearlist">
          <LanguageSelect />
          <li>
            <button
              onClick={() => setIsModalOpen(true)}
              className="opacity-1 no-hover"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              <span
                className="link-hover-anim underline"
                data-link-animate="y"
                style={{
                  color: buttonColor,
                }}
              >
                <span className="link-strong link-strong-unhovered">
                  Marque a sua consulta
                </span>
                <span
                  className="link-strong link-strong-hovered"
                  aria-hidden="true"
                >
                  Marque a sua consulta
                </span>
              </span>
            </button>
          </li>
        </ul>
      </div>
      {isModalOpen && (
        <div
          className="modal-overlay"
          style={{
            position: "fixed",
            top: 25,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1000,
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="modal-content"
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              maxWidth: "500px",
              width: "100%",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              style={{
                float: "right",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "18px",
              }}
            >
              ✖
            </button>
            <div id="hubspot-form"></div>
          </div>
        </div>
      )}
    </div>
  );
}