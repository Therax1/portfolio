import { faArrowUp, faArrowUpRightDots } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectCard = ({link="#", thumb, alt = "Miniature de Présentation du projet ", title, description, stack }) =>{
    return (
        <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="projectCard rounded-lg shadow-red-glow"
        >
            <img 
                className="object-cover"
                src={thumb} 
                alt={alt} 
            />
            <div className="infos bg-cardColor space-y-2 rounded-b-lg p-4 px-6 text-left">
                <h3 className=" flex justify-between font-bold">
                    {title}
                    <FontAwesomeIcon icon={faArrowUp} className="rotate-45"/>
                </h3>
                <p className="brevdescription text-xs">
                    {description}
                </p>
            </div>
        </a>
    )
}

export default ProjectCard;