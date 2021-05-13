import HighscoreList from './HighscoreList';
import HighscoreEntry from './HighscoreEntry';

const Login = (props) => {
    return (
        <div className='container'>
            <form>
                <h1>Welcome to the game</h1>
                <hr />
                <input value={props.username} onChange={props.usernameListener} type='text' placeholder='Input username...' className='form-control' />
                <button onClick={props.btnHandler} className='btn btn-success mt-3'>Start!</button>

            </form>
            <HighscoreList>
                <HighscoreEntry name='Karl' score='100' />
                <HighscoreEntry name='Erik' score='-1' />
                <HighscoreEntry name='Karl' score='100' />
            </HighscoreList>
        </div>
    );
}
export default Login;