import classes from './Gif.module.css';

const Gif = (props) => {
    return(
        <div className={classes.wrapper}>
            <img className={classes.image} src={props.url} alt="gif"/>
        </div>
    );
}

export default Gif;