import "./App.css";

import { Route, Switch } from "react-router-dom";

import India from "./Components/Pages/India";
import World from "./Components/Pages/World";
import Home from "./Components/Pages/Home";
import Error404 from "./Components/Pages/Error404";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/home" exact>
        <Home />
      </Route>
      <Route path="/india" exact>
        <India />
      </Route>
      <Route path="/world" exact>
        <World />
      </Route>
      <Route path="/*">
        <Error404 />
      </Route>
    </Switch>
  );
}

export default App;
