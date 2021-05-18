import classes from "./Gallery.module.css";


const Gallery = (props) => {

    return (
        <div className='container' style={{ textAlign: "center" }}>
            <h1>Welcome to Gif finder</h1>
            <hr />
            <input type='text' className='form-control' onChange={props.filterHandler} placeholder='Enter filter term'></input>
            <div className={classes.gallery} >
                {props.gifs}
            </div>
        </div>
    );
}
export default Gallery;