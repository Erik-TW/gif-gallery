
const HighscoreList = (props) => {
    return (
        <div>
            <h2>Highscore:</h2>
            <ol>
                {props.children}
            </ol>
        </div>
    )
}

export default HighscoreList;