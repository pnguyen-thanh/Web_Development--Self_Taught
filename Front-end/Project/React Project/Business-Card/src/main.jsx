import './index.css'
import Information from './Components/infor'
import About from './Components/about'
import Interests from './Components/interest'
import Footer from './Components/footer'

export default function Main () {
    return (
        <div>
            <Information />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}