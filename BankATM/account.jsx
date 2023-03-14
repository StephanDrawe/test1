const ATMDeposit = ({ onChange, isDeposit }) => {
    const choice = ['Withdraw', 'Deposit'];
    return(
        <label className="label huge">
            <h3>{choice[Number(isDeposit)]}</h3>
            <input type="number" onChange={onChange}></input>
            <input type="submit" value="submit"></input>
        </label>
    );
};

const Account = () => {
    const [inputState, setInputState] = React.useState(0);
    const [accountState, setAccountState] = React.useState(0);
    const [isDeposit, setIsDeposit] = React.useState(true);
    const [atmMode, setAtmMode] = React.useState('');
    const [validTransaction, setValidTransaction] = React.useState(false);
    let status = `Account Balance: $${accountState}`;

    const handleChange = e => {
        if (Number(e.target.value) <= 0) {
            return setValidTransaction(false);
        }
        if (atmMode === 'Withdraw' && Number(e.target.value) > accountState) {
            setValidTransaction(false);
        } else {
            setValidTransaction(true);
        }

        setInputState(Number(e.target.value));
        console.log(inputState);
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(validTransaction);
        // alert(`deposited: $${inputState}`);
        let newAccountState = isDeposit ? accountState + inputState : accountState - inputState;
        // let newAccountState = accountState + inputState;
        if (validTransaction){
        setAccountState(Number(newAccountState));
        } else {
            alert("Insufficient Funds")
        }
        // console.log(accountState);
    };
    const handleModeSelect = e => {
        setAtmMode(e.target.value);
          if (e.target.value === 'Deposit'){
          setIsDeposit(true);
        } else {
          setIsDeposit(false);
        }
      };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{status}</h2>
            
            <label>Select an action below to continue</label>
            <select onChange={(e) => handleModeSelect(e)} name="mode" id="mode-select">
            <option id="no-selection" value=""></option>
            <option id="deposit-selection" value="Deposit">Deposit</option>
            <option id="withdraw-selection" value="Withdraw">Withdraw</option>
            </select>
                
            {atmMode && <ATMDeposit onChange={handleChange} isDeposit={isDeposit}>Deposit</ATMDeposit>}
        </form>
    );
};

ReactDOM.render(<Account/>, document.getElementById("root"));