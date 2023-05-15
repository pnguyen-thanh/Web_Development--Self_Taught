import '../index.css'
import logo from '../images/react-icon-large.png'

export default function Main () {
    return (
        <div className='main-container'>
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k starts on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
            <img src={logo} alt='Big Logo React'/>
        </div>
    )
}