import { useState } from "react";
import Cart from "./components/CART/Cart";
import Header from "./components/LAYOUT/Header";
import Meals from "./components/MEALS/Meals";
import CartProvider from "./components/store/CartProvider";

function App() {
  const [CartIsShown, SetCartIsShown] = useState(false);

  const showCartHandler = (props) => {
    SetCartIsShown(true);
  };

  const hideCartHandler = (props) => {
    SetCartIsShown(false);
  };

  return (
    <CartProvider>
      {CartIsShown && <Cart onCloseCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
