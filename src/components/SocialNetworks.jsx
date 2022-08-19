import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

import "../styles/components/socialnetworks.sass";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn />},
  { name: "github", icon: <FaGithub />},
  { name: "twitter", icon: <FaTwitter />}
];

export function SocialNetworks() {
  return (
    <section id="social-networks">
      {
        socialNetworks.map((network) => (
          <a href="#"className="social-btn" id={network.name} key={network.name}>
            {network.icon}
          </a>
        ))
      }
    </section>
  );
}