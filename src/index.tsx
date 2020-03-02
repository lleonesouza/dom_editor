import React from "react";
import ReactDOM from "react-dom";
import StoreContext from "./states/context";
import initialContext from "./__mocked__";
import {Preview, Editors} from "./components";

function App() {
  return (
    <div style={{display:'flex'}}>
      <Editors />

      <StoreContext.Provider value={initialContext}>
        <Preview />
      </StoreContext.Provider>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
