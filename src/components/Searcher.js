import Gif from "./Gif";
import classes from './Searcher.module.css'

const Searcher = (props) => {
    return (
        <div className={classes.container}>
            <h1>{props.gifTitle}</h1>
            <Gif url={props.gifUrl} />
            <button className="btn btn-success mt-3 ml-3" onClick={props.saveClick}>Save Gif</button>
            <button className="btn btn-primary mt-3 ml-3" onClick={props.nextClick}>Next Gif</button>
        </div>
    )
}

export default Searcher;