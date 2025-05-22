
const XpCard = ({url, alt, title, workTime, description})=>{
    return(
        <div className="xpcard px-2 space-y-3">
            <div className="header flex items-center gap-2 text-[10px] justify-between">
                <img
                    className="w-6 h-6 object-contain"
                    src={url} 
                    alt={alt}
                />
                <h4 className="xp__title font-bold grow">{title}</h4>
                <p className="text-gray ">{workTime}</p>
            </div>
            <p className="xp__description text-[9px] px-4 md:text-[10px]">
                {description}
            </p>
        </div>
    )
}

export default XpCard;