import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Form } from "./components/Form";
import { Products } from "./components/Products";
import { Login } from "./components/Login";
import PrivateRoute from "./PrivateRoute";
import { post } from "./fetch";
import User from "./helpers/User";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const fetchAuthData = async () => {
      let data = {};
      data = await post("/auth").then((res) => res.json());
      switch (data.message) {
        case "Acceso denegado":
          User.logout();
          break;

        default:
          break;
      }
    };
    fetchAuthData();
  }, []);
  return (
    <div className="App">
      <Switch>
        <PrivateRoute exact path="/products" component={Products} />
        <PrivateRoute exact path="/form" component={Form} />
        <Route path="/" component={Login} />
        <Route path="*" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
