import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

import "../styles/components/informationcontainer.sass";

export function InformationContainer() {
  return (
    <section id="information-container">
      <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
          <h3>Telefone</h3>
          <p>(11) 99999-0000</p>
        </div>
      </div>

      <div className="info-card">
        <AiOutlineMail id="email-icon" />
        <div>
          <h3>Email</h3>
          <p>wevers.info@gmail.com</p>
        </div>
      </div>

      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>Localização</h3>
          <p>VGP / SP</p>
        </div>
      </div>
    </section>
  );
}