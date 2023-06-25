export default function Dice(props) {
    const style = {
        backgroundColor: props.isHeld ? "#59E391" : "#ffffff"
    }

    return (
        <div className="dice" style={style} onClick={props.holdDice}>{props.value}</div>
    )
}