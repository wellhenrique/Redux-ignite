import React from "react";
import { Provider } from "react-redux";
import { store } from "./score";
import { Catalog } from "./components/Catalog";

function App() {
  return (
    <Provider store={store}>
      <Catalog />
    </Provider>
  );
}

export default App;
