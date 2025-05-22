import ProjectCard from "./ProjectCard";

const Myproject = ()=>{
    
    return (
        <div className="myproject text-center space-y-8">
            <h3 className="text-4xl bg-clip-text text-transparent bg-projectLinearGradient font-bold">PROJETS</h3>
            <div className="projects__presentation flex flex-col gap-8 md:flex-row">
                <ProjectCard 
                    thumb="/assets/projectThumb/project-thumbnail-1.png"
                    title= "Lorem"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. At aspernatur laudantium delectus."
                />
                <ProjectCard 
                    thumb="/assets/projectThumb/project-thumbnail-2.png"
                    title= "Lorem"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. At aspernatur laudantium delectus."
                />
            </div>
        </div>
    )
}

export default Myproject;