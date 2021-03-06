import classes from './GalleryGif.module.css';

const GalleryGif = (props) => {
    return (
        <div className={classes.polaroid}>
            <div className={classes.deleteBtn}>
                <button style={{ justifyContent: 'end' }} className='btn  btn-danger mb-1' onClick={props.delGif}>X</button>
            </div>
            <img className={classes.image} src={props.url} alt="gif" />
            <div className={classes.container}>
                <p>{props.title.length === 0 ? <i>Untitled</i> : props.title}</p>

            </div>
        </div>
    );
}

export default GalleryGif;