interface Props {
    name: string,
    handleClickOnLang: (event: React.MouseEvent<HTMLButtonElement>) => void;
    handleClickOnTheme: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function Navbar({name, handleClickOnLang, handleClickOnTheme}: Props) {
    return (
        <nav>
            <div>{name}</div>

            <div className="toggle-buttons">
                <button id="mode" onClick={handleClickOnTheme} >Mode</button>
                <button id="style" onClick={handleClickOnTheme}>Style</button>
                <button id="EN" onClick={handleClickOnLang}>EN</button>
                <button id="DE" onClick={handleClickOnLang}>DE</button>
            </div>
        </nav>
    )
}

export default Navbar