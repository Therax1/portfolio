import Avatar from "./Avatar";
import Button from "./Button";
const Header = ()=>{
    return(
        <div className="flex flex-col gap-4 items-center text-center md:px-36">
            <Avatar 
                bgEdit="bg-avartarLinearGradient relative w-48 h-48 rounded-full"
                avatarSrc="/assets/Avatar.png"
                className="absolute"
            />
            <div className="cta">
                <h3 className="text-3xl font-bold">
                    Je code, et j’en parle sur <span className="bg-clip-text text-transparent bg-avartarLinearGradient">YouTube</span>
                </h3>
            </div>
            <p className="text-sm">
                Passionné par le code • <br /> Full-Stack (React/Django) • <br /> Je transforme les idées en produits.
            </p>
            <div className="flex gap-4 font-semibold">
                <Button 
                    className="p-4 border rounded-full bg-white text-black"
                    content= "Download CV"
                />
            </div>
        </div>
    )
}

export default Header;