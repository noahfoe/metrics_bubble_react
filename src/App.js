import './App.css';
import './styles.css'; 
import {useState} from 'react'
import MetricsBubble from './Components/MetricsBubble';

function App() {
  // Variables for the label and weight
  const [label, setLabel] = useState("");
  const [weight, setWeight] = useState(0);
  // Varaible for error message (used if weight is out of range)
  const [errorMessage, setErrorMessage] = useState("");


  // Function to setState of the label when form changes
  function handleOnChangeLabel(event) {
    let value = event.target.value;
    setLabel(value);
  }

  // Function to setState of the weight when form changes
  function handleOnChangeWeight(event) {
    let value = event.target.value;

    // If value is empty, assume 0
    if(value === "") value = 0;
    

    // Check if it is in range of 0 and 350
    if(value >= 0 && value <= 350){
      setWeight(value);
      // Remove error message if there is one
      if(errorMessage) setErrorMessage("");
    }
    // If the weight is out of range, update error message
    else setErrorMessage('Error: Weight must be between 0-350!');
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="title">Metrics Bubble React</div>
        {/* Display form to allow user to change MetricsBubble Component */}
        <div className="form">
          <form>
            <label id="font-face-helvetica">
              Label:
              <input type="text" name="label" onChange={handleOnChangeLabel}/>
            </label>
          </form>
          <form>
            <label id="font-face-helvetica">
              Weight:
              <input type="number" name="weight" onChange={handleOnChangeWeight}/>
            </label>
          </form>
          {/* Display error message if the weight is out of range */}
          {errorMessage && (
            <p className="error"> {errorMessage} </p>
          )}
        </div>
        {/* Display MetricsBubble Component with user inputted data */}
        <MetricsBubble label={label} weight={weight} unit="lbs"/>
      </header>
    </div>
  );
}

export default App;
