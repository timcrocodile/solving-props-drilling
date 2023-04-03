import "./App.css";
import { useState, createContext, useContext, useReducer } from "react";
import Counter from "./components/Counter";
import { globalReducer } from "./store/reducers";

export const CounterCtx = createContext({});
// export const initiCounterState = {
//   value: 5,

// };

export const initGlobalState = {
  value: 66,
  pippo: 3,
};

function App() {
  // const [state,dispatch] = useReducer(globalReducer, initiCounterState)
  // *****si potrebbe anche togliere dispatch*****
  const [state] = useReducer(globalReducer, initGlobalState);
  const [valueApp, setValueApp] = useState(0);
  // console.log(GlobalCtx);
  // il console.log si nota il tipo di oggetto che ci viene restituito dove spiccano $$typeof il Consumer e Provider che sono 2 componenti!
  return (
    <div className="App">
      {/* <CounterCtx.Provider value={{ chiave: "ciao" }}> */}
      {/* ******
      <CounterCtx.Provider value={initiCounterState}>
        ********una volta creata la "macchina" del reducer andrà a cambiare anche lo stato da passare a tutti i cmponenti che sara nuovo ogni volta */}
      <CounterCtx.Provider value={{ state }}>
        <Counter />
      </CounterCtx.Provider>
    </div>
  );
}

export default App;
