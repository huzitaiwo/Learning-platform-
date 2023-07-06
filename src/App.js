import { Routes, Route } from "react-router-dom";
import { useState } from "react";

// styles
import "./App.css";

// components
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Showcase from "./pages/Showcase";
import Protected from "./components/Protected";

function App() {
  const [login, setLogin] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Protected login={login}>
              <Home />
            </Protected>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="showcase" element={<Showcase />} />
      </Routes>
    </div>
  );
}

export default App;
