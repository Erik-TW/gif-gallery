import classes from './HighscoreEntry.module.css'

const HighscoreEntry = (props) => {
    return (
        <li className={classes.hsEntry}>
            <span> {props.name} </span>
            <span style={{ float: 'right' }}> {props.score} </span>
        </li>
    )
}

export default HighscoreEntry;