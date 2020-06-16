import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import SignIn from "./pages/SignIn.js";
import SignUp from "./pages/SignUp.js";
import Todos from "./pages/Todos.js";
import Todo from "./pages/Todo.js";
import NotFound from "./pages/NotFound.js";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Switch>
            {/* <Route exact path="/" component={SignUp} /> */}
            <Route exact path="/" component={SignIn} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            {localStorage.token ? (
              <>
                <Route exact path="/todos" component={Todos} />
                <Route exact path="/todo/:id" component={Todo} />
                <Route path="/404" component={NotFound} />
                <Redirect from="*" to="/404" />
              </>
            ) : (
              <Redirect from="*" to="/" />
            )}
          </Switch>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
