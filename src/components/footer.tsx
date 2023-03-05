
export default function Footer(){
    return (
        <footer>
            <div className="container">
                <button className="cv-button">
                    <a className="cv-button-link" href="./cv.pdf" target="_blank">Get a free copy of my CV!</a>
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
                <h3>Designed and made by me (with a little help from my friends)</h3>
                <h4>Heavily inspired from <a href="https://gumroad.com" target="#">gumroad.com</a></h4>
            </div>
        </footer>
    )
}