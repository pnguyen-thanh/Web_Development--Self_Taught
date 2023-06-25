import logo from '../../public/images/troll-face.png'

export default function Header () {
    return (
        <header className='header-container'>
            <div className='logo-container'>
                <img src={logo} alt='Troll Face Logo'/>
                <h1>Meme Generator</h1>
            </div>
            <p>React Course - Project 3</p>
        </header>
    )
}