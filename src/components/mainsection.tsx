interface Props {
    title: string,
    description: string
}

export default function MainSection({title, description}: Props){

    return (
        <main>
            <h1>{title}</h1>
            <img id="profile-picture" src={"./portrait-picture.jpg"}/>
            <p>{description}</p>
        </main>
    )
}