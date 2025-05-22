import {faCss3Alt, faHtml5, faJs, faPython, faReact } from "@fortawesome/free-brands-svg-icons";


import Stack from "./Stack";

const MyStacks = ()=>{
    return (
        <section className="experienceStack space-y-5 mt-6 flex flex-col items-center">
            <h3 className="text-2xl text-gray font-bold">LANGUAGES</h3>
            <div className="stacks-logos space-x-4">
                <Stack  icon={faHtml5}/>
                <Stack  icon={faCss3Alt}/>
                <Stack  icon={faReact}/>
                <Stack  icon={faJs}/>
                <Stack  icon={faPython}/>
            </div>
        </section>
    )
}

export default MyStacks;