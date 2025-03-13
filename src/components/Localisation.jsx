import localisationIcon from "../assets/localisation.png";
import contactIcon from "../assets/contact.png";
export default function Info() {
  return (
    <div className="container-info">
        <h1>Chloé Seclier</h1>
      <div className="contact">
        <img src={contactIcon} alt="" />
        <ul>
          <li>seclier.chloe@gmail.com</li>
          <li>06.76.47.21.06</li>
        </ul>
      </div>

      <div className="localisation">
        <img
          className="icone"
          src={localisationIcon}
          alt="localisation"
          title="localisation"
        />
        <ul>
          <li>Orléans</li>
          <li>Paris Sud-Est</li>
        </ul>
      </div>

    </div>
  );
}
