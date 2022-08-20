import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

import "../styles/components/socialnetworks.sass";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn />, src: "https://www.linkedin.com/in/weverson-dias-aa8859203/"},
  { name: "github", icon: <FaGithub />, src: "https://github.com/wevdiaz"},
  { name: "twitter", icon: <FaTwitter />, src: "https://twitter.com/Wverson"}
];

export function SocialNetworks() {
  return (
    <section id="social-networks">
      {
        socialNetworks.map((network) => (
          <a href={network.src} className="social-btn" target="_blank" id={network.name} key={network.name}>
            {network.icon}
          </a>
        ))
      }
    </section>
  );
}