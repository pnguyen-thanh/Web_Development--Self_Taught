import logo from '../images/airbnb-logo.png'

export default function Navbar () {
    return (
        <nav className='nav-container'>
            <img src={logo} alt='Airbnb logo'/>
        </nav>
    )
}