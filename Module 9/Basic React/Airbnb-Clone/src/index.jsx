import Navbar from "./Components/Nav";
import Hero from "./Components/Hero";
import Cards from "./Components/Cards";
import data from "./data";

export default function Main () {
    const cards = data.map(card => {
        return (
            <Cards
                key={card.id}
                {...card}
            />
        )
    })
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}

