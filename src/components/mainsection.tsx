interface Props {
    title: string,
    description: string
}

export default function MainSection({title, description}: Props){

    return (
        <section id="main">
            <div className="container">
                <h1>{title}</h1>
                <img id="profile-picture" src={"./portrait-picture.webp"}/>
                <p>{description}</p>
            </div>
        </section>
    )
}