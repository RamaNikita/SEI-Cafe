//Imports
import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "./utilities/users-service";
//Pages
import NewOrderPage from "./pages/NewOrderPage/NewOrderPage.js";
import AuthPage from "./pages/AuthPage/AuthPage.js";
import OrderHistoryPage from "./pages/OrderHistoryPage/OrderHistoryPage.js";
//NavBar
import NavBar from "./components/NavBar/NavBar.js";

function App() {
  const [user, setUser] = useState(getUser());
  console.log("Current user", user);
  return (
    <main className="App">
      {user ? (
        <>
          {" "}
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
