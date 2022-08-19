import Avatar from "../images/photo.jpeg";

import "../styles/components/sidebar.sass";

export function Sidebar() {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Weverson Diazz" />
      <p className="title">Desenvolvedor</p>
      <p>redes sociais</p>
      <p>informações de contato</p>
      <a href="#" className="btn">
        download curriculo
      </a>
    </aside>
  );
}