import localisationIcon from "../assets/localisation.png";
import contactIcon from "../assets/contact.png";
import gitHubIcon from "../assets/github.png";
export default function Info() {
  return (
    <>
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
            <li>Paris</li>
          </ul>
        </div>

        <div className="contact">
          <img src={gitHubIcon} alt="" />
          <ul>
            <li>
              <a
                href="https://github.com/ChloeSeclier"
                target="_blank"
                rel="noopener noreferrer"
              >
                ChloeSeclier
              </a>
            </li>
          </ul>
        </div>
      </div>

    </>
  );
}
