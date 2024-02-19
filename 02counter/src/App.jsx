import { useState } from "react";
import "./App.css";

function App() {
  //let counter = 0;
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    //setCounter(counter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const delValue = () => {
    if (counter === 0) {
      // dont delete error message
      return alert("This is the minimum limit");
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>React Course</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={addValue}>ADD</button>
      <button onClick={delValue}>DEL</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
