import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Cart } from "./pages/cart/cart";
import { Shop } from "../src/pages/shop/shop";
import { ShopContextProvider } from "./context/shop-context";

// Notes: we place the navbar between the Router and Routes so that it shows up on all pages
// Notes: jsx is for react components only, js is for javascript componets only
// Packages used
// -	Phosphor-react: this library will give me cool icons I can use during this project.
// -	React-router-dom: because we need to have different routes in this application.

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
