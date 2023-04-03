import { useState, useContext, useReducer } from "react";
import { CounterCtx } from "../App";
import { globalReducer } from "../store/reducers";

const Counter = () => {
  //   const [value, setValue] = useState(0);

  //   const onHandleClick = (e) => {
  //     switch (e.target.className) {
  //       case "increment":
  //         setValue((prev) => prev + 1);
  //         return setValueApp(value);
  //       case "decrement":
  //         return setValue((prev) => prev - 1);
  //       case "reset":
  //         return setValue(0);
  //       default:
  //         return setValue(0);
  //     }
  //   };

  //   const counter = useContext(CounterCtx);
  //   const [state,dispatch] = useReducer(globalReducer, initiCounterState)
  // *****essendo globale adesso****

  const globalState = useContext(CounterCtx);
  const [state, dispatch] = useReducer(globalReducer, globalState);

  console.log(state);

  return (
    <div className="Counter">
      {/* {console.log(useContext)} */}
      {/* {console.log(counter)}
       ***************************************** */}

      {/* <button className="increment" onClick={onHandleClick}>
        increment
      </button>
      <h1>{value}</h1>
      <button className="decrement" onClick={onHandleClick}>
        decrement
      </button>
      <button className="reset" onClick={onHandleClick}>
        reset
      </button>

      <button onClick={() => setValueApp(value)}>
        no asincronicità (send to parent App)
      </button> */}
      <button
        className="increment"
        onClick={() => dispatch({ type: "increment" })}
      >
        increment
      </button>
      {/* <h1>{counter.value}</h1> */}

      <h1>{state.pippo}</h1>

      {/* andando a sotituire a 0 nell'h1 la proprietà value di counter e quidi value.counter.. sarà poi visualizzabile dappertutto */}
      <button className="decrement">decrement</button>
      <button className="reset">reset</button>

      <button onClick={() => setValueApp(value)}>
        no asincronicità (send to parent App)
      </button>
    </div>
  );
};

export default Counter;
