import XpCard from "./XpCard"
const Xp = ()=>{
    return (    
        <section className="xp space-y-3">
            <h3 className="text-center font-bold text-3xl bg-xpLinearGradient bg-clip-text text-transparent">🚀 EXPERIENCE</h3>
            <div className="md:flex md:items-center space-y-4">
                <XpCard
                className="grow"
                url="/assets/google-logo.png"
                alt = "Logo de Google "
                title = "Lead Software Engineer at Google"
                description= "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions ..."
                workTime="Now 2019 - Present"
                />
                <XpCard 
                    className=""
                    url="/assets/meta-logo.png"
                    alt = "Logo de Google "
                    title = "Software Engineer at Meta"
                    description= "At Meta, I served as a  Software Engineer, focusing on the design and implementation of backend systems ..."
                    workTime="Jan 2017 - Oct 2019"
                />
            </div>
        </section>

    )
}

export default Xp