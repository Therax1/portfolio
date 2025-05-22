const Links = ({link, content, className}) =>{
    return(
        <a 
            href={link}
            className={className || "text-2xl"}
            rel= "noopener noreferer"
        >
            {content}
        </a>
    )
}

export default Links;