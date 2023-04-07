import "./App.css";
import Nav from "./Components/Nav";
import Login from "./Components/login";
import Home from "./Components/home";
import { useContext } from "react";
import { AuthContext } from "./Components/Context";

function App() {
  const { isloggedin } = useContext(AuthContext);
  return (
    <div className="App">
      {isloggedin ? (
        <div>
          <Nav />
          <Home />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
