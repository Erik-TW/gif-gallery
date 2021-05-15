import classes from './Gif.module.css';

const Gif = (props) => {
    return (
        <div className={classes.polaroid}>
            <img className={classes.image} src={props.url} alt="gif" />
            <div className={classes.container}>
                <p>{props.title.length === 0 ? <i>Untitled</i> : props.title}</p>
            </div>
        </div>
    );
}

export default Gif;