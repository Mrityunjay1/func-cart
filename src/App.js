import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux 
import {createStore} from "redux";
import reducer from "./reducer"
import {Provider} from "react-redux"



const initialStore={
  cart:cartItems,
  total:0,
  amount:10
};
const store = createStore(reducer,initialStore);


function App() {
  // cart setup

  return (
    <main>
    <Provider store={store}>
      <Navbar />
      <CartContainer />
      </Provider>
    </main>
  );
}

export default App;
