import Navbar from "./components/Navbar";
import SideNav from "./components/SideNav";
import "./App.css";
import Home from "./Pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from "react-router-dom";
import UserList from "./Pages/UserList";
import UserInfoAndEdit from "./Pages/UserInfoAndEdit";
import NewUser from "./Pages/NewUser";
import ProductList from "./Pages/ProductList";
import ProductInfoAndEdit from "./Pages/ProductInfoAndEdit";
import NewProduct from "./Pages/NewProduct";
import Login from "./Pages/Login";
import { useSelector } from "react-redux";

function AppContent() {
  const user = useSelector((state) => state.user);
  const isLoggedIn = user?.currentUser?.isLoggedIn || false;

  return (
    <>
      {isLoggedIn && <Navbar />}
      <div className="container">
        <SideNav />
        <Routes>
          <Route
            path="/"
            element={isLoggedIn ? <Navigate to="/Home" /> : <Login />}
          />
          <Route
            path="/Home"
            element={isLoggedIn ? <Home /> : <Navigate to="/" />}
          />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<UserInfoAndEdit />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<ProductInfoAndEdit />} />
          <Route path="/newProduct" element={<NewProduct />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;