import Gif from "./Gif";
import classes from './Searcher.module.css'

const Searcher = (props) => {
    return (
        <div className='container'>
            <input type='text' className='form-control' onChange={props.searchQueryHandler} placeholder='Enter search term'></input>
            <button className='btn btn-success mt-3 mr-3' onClick={props.searchBtnHandler}>Search GIFS</button>
            <button className='btn btn-primary mt-3' onClick={props.randomBtnHandler}>Get Random GIF</button>
            {props.children}
        </div>
    )
}

export default Searcher;