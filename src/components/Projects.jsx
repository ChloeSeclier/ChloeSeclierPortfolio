import { projectList } from "../data/project-list";
import peopleIcon from "../assets/people.png";
export default function Projects() {
  return (
    <>
      <div className="presentation-project">
        <h1>Projets :</h1>
        <p>👋 Cliquez sur l'image d'un projet pour accéder au site.</p>
      </div>
      <div className="container-projects">
        {projectList.map((project) => (
          <div className="project">
            <h2>{project.nameProject}</h2>
            <a
              href={project.linkProjetc}
              target="_blank"
              rel="noopener noreferrer"
              title="Cliquez pour voir plus"
            >
              <img
                className="picture-project"
                src={project.pictureProject}
                alt={project.nameProject}
              />
            </a>
            <p>
              <em className="line-project">Nombre de participants :</em>{" "}
              {[...Array(project.nbPeople)].map((_, index) => (
                <img
                  key={index}
                  src={peopleIcon}
                  alt="people"
                  title="Nb de personnes"
                  style={{ width: "15px" }}
                />
              ))}
            </p>
            <p>
              <em className="line-project">But :</em> {project.but}
            </p>
            <p>
              <em className="line-project">Description :</em>{" "}
              {project.description}
            </p>
            <p>
              <em className="line-project">Durée :</em> {project.time}
            </p>
            <p>
              <em className="line-project">Date :</em> {project.date}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
