import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import PrivateRoute from "./components/PrivateRoute.js";
import SignIn from "./pages/SignIn.js";
import SignUp from "./pages/SignUp.js";
import Todos from "./pages/Todos.js";
import Todo from "./pages/Todo.js";
import NotFound from "./pages/NotFound.js";

function App() {
  console.log('in the app');
  
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Switch>
            {/* <Route exact path="/" component={SignUp} /> */}
            <Route exact path="/" component={SignIn} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/404" component={NotFound} />
            <PrivateRoute path="/todos">
              <Todos />
            </PrivateRoute>
            <PrivateRoute path="/todo/:id">
              <Todo />
            </PrivateRoute>
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
