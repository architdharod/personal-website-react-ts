interface Props {
    title: string,
    description:string,
    skills:{
        name:string,
        logo:string
    }[]
}

export default function SkillSection({title, description, skills}: Props) {

    const skillTab = skills.map((skills) => {
        return (
            <div className="skill-card">
                <img src={`${skills.logo}`}></img>
                <p>{skills.name}</p>
            </div>
        )
    })

    return (
        <section id="skills">
            <h2>{title}</h2>
            <div className="skill">
                {skillTab}
            </div>
            <p>{description}</p>
        </section>
    )
}