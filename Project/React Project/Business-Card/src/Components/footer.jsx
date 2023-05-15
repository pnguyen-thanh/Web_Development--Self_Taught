import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebookF, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-inner">
                <FontAwesomeIcon className="footer-icon" icon={faTwitter} />
                <FontAwesomeIcon className="footer-icon" icon={faFacebookF} />
                <FontAwesomeIcon className="footer-icon" icon={faInstagram} />
                <FontAwesomeIcon className="footer-icon" icon={faGithub} />
            </div>
        </footer>
    )
}
