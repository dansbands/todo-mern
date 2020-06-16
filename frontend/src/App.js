import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import SignIn from "./pages/SignIn.js";
import SignUp from "./pages/SignUp.js";
import Todos from "./pages/Todos.js";
import Todo from "./pages/Todo.js";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/todos" component={Todos} />
            <Route exact path="/todo/:id" component={Todo} />
          </Switch>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
