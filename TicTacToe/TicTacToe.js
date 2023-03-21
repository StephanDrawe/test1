function checkWinner(state) {
  const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
  ];
  
  for (let i = 0; i < win.length; i++) {
      const [a, b, c] = win[i];
      if (state[a] == state[b] && state[a] == state[c])
      return state[a];
  }
  return null;
};

const Square = (props) => {
  const {id, player, newState } = props;
  const [color, setColor] = React.useState("blue");
  const [status, setStatus] = React.useState(null);

  const xo = ['O', 'X'];

  const palet = ['blue', 'green'];
  let toggle = (player+1)%2;
  const getColor = () => palet[toggle];
  return (
    <button onClick={(e) => {
// if (filled) {return null;}
// else {}

      let col = getColor();
      setColor(col);
      e.target.style.background = col;
      let nextPlayer = newState(id);
      setStatus(nextPlayer);


      }}
    > 
      <h1>{xo[status]}</h1> 
    </button>
    
  )
}

const Board = () => {
  const [player, setPlayer] = React.useState(1);
  const [state, setState] = React.useState(Array(9).fill(null));
  let playerDisplay = (player === 1) ? 'Player 1' : 'Player 2';
  let status = `Player ${player}`;
  let winner = checkWinner(state);
  if (winner != null) status = `Player ${winner} wins!`

  const newState = idOfSqaure => {
    let thePlayer = player;

    state[idOfSqaure] = player;
    setState(state);

    let nextPlayer = (player+1)%2;
    setPlayer(nextPlayer);
    
    return thePlayer;
  }

  function renderSquare(i) {
    return <Square id={i} player={player} newState={newState} ></Square>;
  }

  return (
    <div
      className="game-board"
      onClick={(e) => {
        setPlayer((player + 1)%2);
        // status = `Player ${player}`;
      }}
    >
      <div className="grid-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="grid-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="grid-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <div id="info">
        <h1>{playerDisplay}</h1>
      </div>
    </div>
  );
};

// ========================================

ReactDOM.render(<Board />, document.getElementById("root"));
