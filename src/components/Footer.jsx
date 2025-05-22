import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Links from "./Links";

const socialLinks = [
  { icon: faInstagram, url: "https://instagram.com" },
  { icon: faXTwitter, url: "https://x.com" },
  { icon: faYoutube, url: "https://youtube.com" }
];

const Footer = () => (
  <footer className="bg-footer p-4 md:p-16 md:px-96">
    <div className="space-y-4">
        <h4 className="font-bold text-2xl">Contact</h4>
        <p className="text-sm max-w-[600px] text-gray">
        Seasoned Full Stack Software Engineer with over 8 years...
        </p>
        
        <Links 
        link="mailto:therance.nabil.pounto.therax@gmail.com?subject=Contact%20portfolio"
        className="inline-flex items-center gap-2 font-bold hover:text-blue-500 transition-colors"
        content={<><FontAwesomeIcon icon={faEnvelope}/> Envoyer un mail</>}
        />

        <div className="flex gap-4">
        {socialLinks.map(({ icon, url }) => (
            <Links 
            key={url}
            link={url}
            content={<FontAwesomeIcon icon={icon} aria-label={icon.iconName}/>}
            target="_blank"
            />
        ))}
        </div>
    </div>
  </footer>
);

export default Footer;