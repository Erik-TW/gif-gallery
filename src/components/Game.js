import Gif from "./Gif";
import classes from './Game.module.css'

const Game = (props) => {
    return (
        <div className={classes.container}>
            <h1>Which gif has the highest rating?</h1>
        <Gif url={props.leftUrl} onClick={props.leftClick}/>

        <Gif url={props.rightUrl} onClick={props.rightClick}/>

        <h2>Current score: {props.score}</h2>
        </div>

    )
}

export default Game;