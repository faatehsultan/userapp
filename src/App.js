import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login, Dashboard } from "./pages";
import { LoginContext } from "./Contexts/LoginContext";

function App() {
  const [userFlag, setUserFlag] = useState(false);
  const [role, setRole] = useState(1);

  useEffect(() => {
    var cook = document.cookie;
    if (
      cook
        .split("; ")
        .filter((i) => i.split("=")[0] === "USER_APP_USER_FLAG")[0] &&
      cook
        .split("; ")
        .filter((i) => i.split("=")[0] === "USER_APP_USER_FLAG")[0]
        .split("=")[1] === "true"
    ) {
      setUserFlag(true);
      setRole(
        cook
          .split("; ")
          .filter((i) => i.split("=")[0] === "USER_APP_USER_ROLE")[0]
          .split("=")[1]
      );
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <LoginContext.Provider value={{ role, setRole, setUserFlag }}>
              {userFlag ? <Dashboard /> : <Login />}
            </LoginContext.Provider>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
