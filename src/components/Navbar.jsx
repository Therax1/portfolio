import { useState } from "react";  
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";  
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";  
import { Link } from "react-router-dom";

const Navbar = () => {  
  const [isOpen, setIsOpen] = useState(false);  

  return (  
    <nav className="w-full flex justify-between items-center p-4 bg-noir shadow-md md:justify-evenly lg:px-36">  
      <a href="/" className="text-xl font-bold text-white">Thérance</a>  

      {/* Menu Desktop/Mobile */}  
      <div className={`  
        ${isOpen ? 'flex flex-col absolute top-16 right-4 bg-black p-4 shadow-lg z-50 gap-4' : 'hidden'}  
        text-white
        md:flex md:gap-6 md:relative md:bg-transparent md:p-0 md:shadow-none md:text-sm md:items-center
      `}>  
        <a href="#accueil">Accueil</a>  
        <a href="#projects">Projets</a>  
        <a href="#xp">Experience</a>  
        <a href="#contact">Contact</a>  
      </div>  

      {/* Bouton Mobile */}  
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>  
        <FontAwesomeIcon icon={isOpen ? faClose : faBars} className="text-2xl text-white" />  
      </button>  
    </nav>  
  );  
};  

export default Navbar;  