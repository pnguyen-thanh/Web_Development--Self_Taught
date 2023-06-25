import NavBar from "./Components/NavBar"
import MainPage from "./Components/MainPage"
import data from './Components/data'

export default function App() {
    const mainContents = data.map(content => {
        return (
            <MainPage 
                key={content.title}
                {...content}
            />
        )
    })
    return (
        <div>
            <NavBar />
            {mainContents}
        </div>
    )
}