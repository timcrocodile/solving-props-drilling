import "./App.css";
import { useState, createContext, useContext, useReducer } from "react";
import Counter from "./components/Counter";
import { globalReducer } from "./store/reducers";
import { CounterCtx, initGlobalState } from "./store/index";

// export const CounterCtx = createContext({});
// export const initiCounterState = {
//   value: 5,

// };

// export const initGlobalState = {
//   value: 66,
//   pippo: 3,
// };

function App() {
  // const [state,dispatch] = useReducer(globalReducer, initiCounterState)
  // *****si potrebbe anche togliere dispatch*****
  const [state, dispatch] = useReducer(globalReducer, initGlobalState);
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

//avere lo state e dispatch all'interno del componente mi va a creare 2 reducer diversi, uno in counter ed uno in app, e quindi
//esssendo parte di scope diversi saranno anche essi diversi, e facendo il console.log dello state.value in App mi darà 0
// e non il numero salvato nel componente in Counter
// quindi bisogna sempre farlo in App in maniera che i lo stato del componente reducer sia lo stesso in tutti i componenti
//e questo si fa aggiungendo , sia lo STATE che il DISPATCH dentro il VALUE del provider!!1!1
