interface Props {
    title: string,
    description:string,
    skills:{
        name:string,
        logo:string
    }[]
}

export default function SkillSection({title, description, skills}: Props) {

    const placeholder = "-: placeholder :-"

    return (
        <div id="skills">
            <h2>{title}</h2>
            <div className="skill">
                {placeholder}
            </div>
            <p>{description}</p>
        </div>
    )
}