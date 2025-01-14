import React from "react";

export default function FooterSocials() {
  const socials = [
    { name: "Facebook", icon: "fa-facebook", url: "https://www.facebook.com/drthomasbenson/" },
    { name: "Instagram", icon: "fa-instagram", url: "https://www.instagram.com/thomasbenson/" },
    { name: "YouTube", icon: "fa-youtube", url: "https://www.youtube.com/@dr.thomasbenson" },
    /* { name: "Pinterest", icon: "fa-pinterest", url: "#" }, */
    { name: "LinkedIn", icon: "fa-linkedin", url: "https://www.linkedin.com/in/thomas-benson-12b2287a/" },
  ];

  return (
    <>
      {socials.map((social, index) => (
        <li key={index}>
          <a href={social.url} rel="noopener nofollow" target="_blank">
            <i className={social.icon} /> {social.name}
          </a>
        </li>
      ))}
    </>
  );
}
