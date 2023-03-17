import { AppSettings } from "../assets/interfaces"

interface Props {
    cvButtonText:string,
    description:string,
    inspiration: string,
    appSetting: string
}

export default function Footer({cvButtonText, description, inspiration, appSetting}:Props){
    return (
        <footer>
            <div className="container">
                <button className="cv-button">
                    <a className="cv-button-link" href="./cv.pdf" target="_blank">{cvButtonText}</a>
                </button>
                <div className="social-media">
                    <a href="https://github.com/architdharod" target="#">
                        <i className="bi bi-github"></i>
                    </a>
                    <a href="https://www.instagram.com/architrakatha" target="#">
                        <i className="bi bi-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/archit-dharod/" target="#">
                        <i className="bi bi-linkedin"></i>
                    </a>
                </div>
                <h3>{description}</h3>
                <h4>{inspiration}
                        <a href={appSetting=="brutalism" ? "https://gumroad.com" : "https://uxdesign.cc/neumorphism-in-user-interfaces-b47cef3bf3a6"} target="#">
                            {appSetting=="brutalism" ? "gumroad.com" : "uxdesign.cc"}
                        </a></h4>
            </div>
        </footer>
    )
}