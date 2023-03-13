interface Props {
    title: string,
    project:{
        key:number,
        title: string,
        description: string,
        thumbnail:string,
        skills:string
    } [],
    description:string,
    email:string
}

export default function ProjectSection({title, project, description, email}: Props) {

    const projectCard = project.map((project)=>{
        return (
            <div className="project-card" key={project.key}>
                <a href={project.thumbnail} target="#">
                    <img src={project.thumbnail}></img>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <h4>{project.skills}</h4>
                </a>
            </div>
        )
    })

    return (
        <section id="project">
            <div className="container">
                <h2>{title}</h2>
                {projectCard}
                <div className="description">{description}</div>
                <div className="email">{email}</div>
            </div>
        </section>
    )
}