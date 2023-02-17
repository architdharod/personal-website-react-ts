interface Props {
    title: string,
    description:string,
    skills:{
        key:number,
        name:string,
        logo:string
    }[]
}

export default function SkillSection({title, description, skills}: Props) {

    const skillTab = skills.map((skills) => {
        return (
            <div className="skill-card" key={skills.key}>
                <img src={`${skills.logo}`}></img>
                <div>{skills.name}</div>
            </div>
        )
    })

    return (
        <section id="skills">
            <div className="container">
                <h2>{title}</h2>
                <div className="skill">
                    {skillTab}
                </div>
                <p>{description}</p>
            </div>
        </section>
    )
}