const Avatar = ({bgEdit, className, avatarSrc, alt = "Une image"})=>{
    return(
        <div className={bgEdit}>
            <img 
                src={avatarSrc} 
                alt={alt}
                className={className}
            />
        </div>
    )
}

export default Avatar;