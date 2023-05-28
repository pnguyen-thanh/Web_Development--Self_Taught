import {decode} from 'html-entities';

export default function QA (props) {

    const Background = (isChoose, isCorrect, isChecked) => {
        if (isChecked) {
            return isCorrect ? "#94D7A2" : (isChoose ? "#F8BCBC" : "")
        } else {
            return isChoose ? "#D6DBF5" : ""
        }
    }
      
    const answer = props.answers.map(ans => {
        const styleBackground = {
            backgroundColor: Background(ans.isChoose, ans.isCorrect, ans.isChecked),
        }
    
        return (
            <p   
                key={ans.id} 
                onClick={() => props.handleClick(ans.answer, ans.id)} 
                style={styleBackground}
            >{decode(ans.answer)}</p>
        );
    })
    

    // console.log(answer)
    
    const styleTrueFalse = {
        width: props.answers.length === 2 ? "50%" : ""
    }

    return (
        <div className="qa-container">
            <h1>{props.question}</h1>
            <div className="answer-container" style={styleTrueFalse}>
                {answer}
            </div>
            <hr/>
        </div>
    )
}
