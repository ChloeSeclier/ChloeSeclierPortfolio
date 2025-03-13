import profilPicture from "../assets/chloe.png";

export default function Header() {
  return (
      <div className="header">
        <img src={profilPicture} alt="" />
        <h1>Concepteur Développeur d’Application</h1>
      </div>
  );
}
