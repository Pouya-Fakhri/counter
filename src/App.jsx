import { useReducer } from "react";

function App() {
  const initialNum = 0;

  const [num, dispatch] = useReducer(reducer, initialNum);
  function reducer(num, action) {
    switch (action.type) {
      case "-":
        return num - 1;
        break;
      case "+":
        return num + 1;
        break;
      case "+2":
        return num + 2;
        break;
      case "+4":
        return num + 4;
        break;
      case "reset":
        return (num = 0);
        break;
      default:
        return num;
        break;
    }
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={() => dispatch({ type: "-" })}>-</button>
      <button onClick={() => dispatch({ type: "+" })} >+</button>
      <button onClick={() => dispatch({ type: "+2" })} >+2</button>
      <button onClick={() => dispatch({ type: "+4" })} >+4</button>
      <button onClick={() => dispatch({ type: "reset" })} >reset</button>
    </div>
  );
}

export default App;
