import Gif from "./Gif";
import classes from './Searcher.module.css'

const Searcher = (props) => {
    return (
        <div className='container' style={{ textAlign: "center" }}>
            <input type='text' className='form-control' onChange={props.searchQueryHandler} placeholder='Enter search term'></input>
            <button className='btn btn-success mt-3 mr-3' onClick={props.searchBtnHandler}>Search GIFS</button>
            <button className='btn btn-primary mt-3' onClick={props.randomBtnHandler}>Get Random GIF</button>
            <div className={classes.imageContainer}>
                {props.children}
            </div>
        </div>
    )
}

export default Searcher;