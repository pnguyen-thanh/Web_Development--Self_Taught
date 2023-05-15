import avatar from '../images/alison-wang-mou0S7ViElQ-unsplash.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Information () {
    return (
        <header className='information-container'>
            <img src={avatar} alt='Avatar'/>
            <h1>Phat Nguyen Thanh</h1>
            <h2>Software Developer</h2>
            <h3>pnguyenthanh0105@gmail.com</h3>
            <div className='btn-container'>
                <button className='email'>
                    <FontAwesomeIcon className='btn-icon' icon={faEnvelope} />
                    <span>Email</span>
                </button>
                <button className='linkedin'>
                    <FontAwesomeIcon className='btn-icon' icon={faLinkedin} />
                    <span>LinkedIn</span>
                </button>
            </div>
        </header>
    )
}
