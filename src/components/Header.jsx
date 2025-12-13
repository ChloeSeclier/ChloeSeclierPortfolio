import profilPicture from "../assets/chloe.png";
import cvPDF from "../assets/CV-Chloe-Seclier-2025.pdf"

export default function Header() {
  return (
    <div className="header">
      <img src={profilPicture} alt="" />
      <h1>Concepteur Développeur d’Applications</h1>
      <a href={cvPDF} target="_blank"class="button" >
      
        <svg
          stroke-linejoin="round"
          stroke-linecap="round"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          height="40"
          width="40"
          class="button__icon"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0z" stroke="none"></path>
          <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
          <path d="M7 11l5 5l5 -5"></path>
          <path d="M12 4l0 12"></path>
        </svg>
        <span class="button__text">Download CV</span>
     </a>
    </div>
  );
}
