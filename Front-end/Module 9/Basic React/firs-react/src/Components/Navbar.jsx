import logo from '../images/react-icon-small.png';
import '../index.css'

export default function Navbar () {
    return (
        <div className='nav-container container'>
            <div className='logo-container'>
                <img src={logo} alt='React Logo'/>
                <h2>ReactFacts</h2>
            </div>
            <h3>React Course - Project 1</h3>
        </div>
    )
}