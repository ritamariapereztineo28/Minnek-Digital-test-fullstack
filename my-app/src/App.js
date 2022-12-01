import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Form } from "./components/Form";
import { Products } from "./components/Products";
import { Login } from "./components/Login";
function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path="/products" component={Products} />
          <Route exact path="/form" component={Form} />
          <Route path="/" component={Login} />
        </Switch>
    </div>
  );
}

export default App;
