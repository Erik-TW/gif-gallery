import classes from './Gif.module.css';

const Gif = (props) => {

    const addClass = (e) => {
        props.onClick();
        e.target.disabled = true;
        e.target.innerHTML = "Saved!"
    }
    return (
        <div className={classes.polaroid}>
            <img className={classes.image} src={props.url} alt="gif" />
            <div className={classes.container}>
                <p>{props.title.length === 0 ? <i>Untitled</i> : props.title}</p>
                <button className="btn btn-success mt-3 ml-3" onClick={addClass} disabled={props.gifSaved}>{props.gifSaved ? "Saved!" : "Save Gif"}</button>
            </div>
        </div>
    );
}


export default Gif;