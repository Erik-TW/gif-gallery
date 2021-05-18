import classes from './Gif.module.css';

const Gif = (props) => {
    return (
        <div className={classes.polaroid}>
            <img className={classes.image} src={props.url} alt="gif" />
            <div className={classes.container}>
                <p>{props.title.length === 0 ? <i>Untitled</i> : props.title}</p>
                <button className="btn btn-success mt-3 ml-3" onClick={props.onClick}>Save Gif</button>
            </div>
        </div>
    );
}

export default Gif;