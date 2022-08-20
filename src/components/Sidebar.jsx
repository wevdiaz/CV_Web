import { SocialNetworks } from "./SocialNetworks";
import { InformationContainer } from "./InformationContainer";

import Avatar from "../images/photo.jpeg";
import Curriculum from "../images/photo.jpeg";

import "../styles/components/sidebar.sass";

export function Sidebar() {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Weverson Diazz" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworks />
      <InformationContainer />
      <a href={Curriculum} download="WeversonDiazz.pdf" type="application/pdf" className="btn">
        download curriculo
      </a>
    </aside>
  );
}