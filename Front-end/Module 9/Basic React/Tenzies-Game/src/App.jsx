import Dice from "./Components/Die"
import React from "react"
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'


export default function App () {
    
    const generateNewDie = () => {
        return {
            value: Math.floor(Math.random() * 6) + 1,
            isHeld: false,
            id: nanoid()
        }
    }

    const allNewDice = () => {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDie())
        }
        return newDice
    }

    const [dices, setDices] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)

    React.useEffect(() => {
        const allHeld = dices.every(die => die.isHeld)
        const firstValue = dices[0].value
        const allSameValue = dices.every(die => die.value === firstValue)
        if (allHeld && allSameValue) {
            setTenzies(true)
            
        }
    }, [dices])

    const newDice = () => {
        if (!tenzies) {
            setDices(prevDices => prevDices.map(dice => dice.isHeld ? dice : generateNewDie()))
        } else {
            setTenzies(false)
            setDices(allNewDice())
        }

    }

    const holdDice = id => {
        setDices(dices.map(dice => dice.id === id ? {...dice, isHeld:true} : dice))
    }

    const diceElements = dices.map(dice => <Dice 
                                                key={dice.id} 
                                                value={dice.value} 
                                                isHeld={dice.isHeld}
                                                holdDice={() => holdDice(dice.id)}
                                            />)

    return (
        <main className="main-container">
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>
            {tenzies && <Confetti />}
            <button onClick={newDice}>{tenzies? "New Game" : "Roll"}</button>
        </main>
    )
}