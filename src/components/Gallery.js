import classes from "./Gallery.module.css";


const Gallery = (props) => {
    return (
        <div className='container' style={{textAlign: "center"}}>
            <h1>Welcome to Gif finder</h1>
            <hr />
            <button onClick={props.btnHandler}  className='btn btn-success mt-3'>Get Random Gif</button>
            <div className={classes.gallery} >
                {props.gifs}
            </div>

        </div>
    );
}
export default Gallery;