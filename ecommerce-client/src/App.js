import "./App.css";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/ProductPage";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  const user = false;

  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products/:category" element={<ProductList />} />
          <Route path="/Products" element={<ProductList />} />
          <Route path="/Product/:id" element={<Product />} />
          <Route path="/Cart" element={<Cart />} />
          <Route
            path="/Login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </Router>
      {/* <Home /> */}
      {/* <ProductList /> */}
      {/* <Product /> */}
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <Cart /> */}
    </div>
  );
}

export default App;
