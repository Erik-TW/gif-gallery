

const Login = (props) => {
    return (
        <div className='container'>
            <h1>Welcome to Gif finder</h1>
            <hr />
            <button onClick={props.btnHandler} className='btn btn-success mt-3'>Get Random Gif</button>

        </div>
    );
}
export default Login;