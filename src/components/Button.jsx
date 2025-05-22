const Button = ({disabled= false, className, content})=>{
    return(
        <button 
            disabled= {disabled}
            className={className}
        >
            {content}
        </button>
    )
}

export default Button;