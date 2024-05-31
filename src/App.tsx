import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

import "./App.scss";
import CartProvider from "./context/CartProvider";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Header />
        <Home />
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
