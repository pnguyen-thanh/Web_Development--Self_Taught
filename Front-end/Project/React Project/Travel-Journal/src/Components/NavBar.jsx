import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';

export default function NavBar() {
    return (
        <nav className='nav-container'>
            <FontAwesomeIcon icon={faEarthAmericas} className='icon' />
            <h1>my travel journal.</h1>
        </nav>
    );
}