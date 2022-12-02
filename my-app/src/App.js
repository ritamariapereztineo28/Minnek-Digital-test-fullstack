import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Form } from "./components/Form";
import { Products } from "./components/Products";
import { Login } from "./components/Login";
import PrivateRoute from "./PrivateRoute";
function App() {
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
