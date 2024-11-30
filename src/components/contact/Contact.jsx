import "./contact.scss";
import { Mail, Instagram, LinkedIn, WhatsApp } from "@material-ui/icons";


export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/connect.jpg" alt="" />
      </div>
      <div className="right">
        <h2>Let's Connect!</h2>
        <div className="socialMediaContainer">
          <div className="socialMedia" onClick={() => window.location = 'mailto:marcell.dctr2@gmail.com'}>
              <Mail className="icon"/>
              <p>marcell.dctr2@gmail.com</p>
          </div>
          <a className="socialMedia" href={"https://www.instagram.com/marcell_adr/"} target="_blank" rel="noreferrer">
              <Instagram className="icon"/>
              <p>@marcell_adr</p>
          </a>
          <a className="socialMedia" href={"https://www.linkedin.com/in/marcell-adrian-rusdianto-0919521aa"} target="_blank" rel="noreferrer">
              <LinkedIn className="icon"/>
              <p>Marcell Adrian Rusdianto</p>
          </a>
          <a className="socialMedia" href={"https://wa.me/628985131443"} target="_blank" rel="noreferrer">
              <WhatsApp className="icon"/>
              <p>+62 8985131443</p>
          </a>
        </div>
      </div>
    </div>
  );
}
