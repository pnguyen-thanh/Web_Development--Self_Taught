import Intro from "./Components/Intro"
import QA from "./Components/QA"
import React from "react"
import {decode} from 'html-entities';
import { nanoid } from 'nanoid';

function shuffleAnswers(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const randomNum = Math.floor(Math.random() * (i + 1));
        [array[i], array[randomNum]] = [array[randomNum], array[i]];
    }
    return array;
}

export default function App () {

    const [questions, setQuestions] = React.useState([])
    const [correctCount, setCorrectCount] = React.useState(0)
    const [hidden, setHidden] = React.useState(false)

    const fetchData = async () => {
        try {
            const response = await fetch(`https://opentdb.com/api.php?amount=10`, {method: "GET"})
            const data = await response.json()
            const quizData = data.results
            const answerArr = quizData.map(quiz => {
                const answers = [quiz.correct_answer, ...quiz.incorrect_answers]
                const shuffledAnswers =  shuffleAnswers(answers)
                return {
                    question: quiz.question,
                    answers: shuffledAnswers.map(ans => ({
                        answer: ans,
                        isChoose: false,
                        id: nanoid()
                    })),
                    correct: quiz.correct_answer,
                }
            })
            setQuestions(answerArr)

        } catch (error) {
            console.error(error)
        }
    }

    React.useEffect(() => {
        fetchData()
    }, [])

    // console.log(questions)

    function chosenAnswer (userAnswer, id) {

        const updatedAnswers = questions.map(ansArr => {
            const updated = ansArr.answers.map(ans => {
                if (decode(userAnswer) === decode(ans.answer) && id === ans.id) {
                    return {
                        ...ans,
                        isChoose: true
                    } 
                }
                return ans
            })
            return {
                ...ansArr,
                answers: updated
            }
        })
        setQuestions(updatedAnswers)
    }

    function verifyAnswer() {
        let newCorrectCount = 0
        
        if (correctCount === 0) {
            const newQuestions = questions.map(qa => {
                const chosen = qa.answers.find(ans => ans.isChoose)
                const correctAnswer = qa.correct
                const isCorrect = chosen && decode(chosen.answer) === correctAnswer
        
                if (isCorrect) {
                    newCorrectCount++;
                }
        
                const checkedAnswers = qa.answers.map(ans => {
                    return {
                        ...ans,
                        isChecked: true, 
                        isCorrect: decode(ans.answer) === correctAnswer
                    }
                })
        
                return {
                    ...qa,
                    answers: checkedAnswers,
                }
            });
            
            setQuestions(newQuestions)
            setCorrectCount(newCorrectCount)
        } else {
            fetchData()
            setCorrectCount(0)
        }
    }  

    function startQuiz () {
        setHidden(true)
    }

    const questionAnswers = questions.map((qa, index) => <QA 
                                                key={index} 
                                                question={decode(qa.question)} 
                                                answers={qa.answers}
                                                correct={qa.correct}
                                                handleClick={(ans, id) => chosenAnswer(ans, id)}
                                                />)
    return (
        <main className="main-container">
            {!hidden && <Intro startQuiz={startQuiz}/>}
            {hidden && questionAnswers}
            {hidden && <div className="check-answer">
                {correctCount > 0 && <p>You scored {correctCount}/{questions.length} correct answers</p>}
                <button onClick={verifyAnswer}>{correctCount > 0 ?"Start over" : "Check answers"}</button>
            </div>}
        </main>
    )
}