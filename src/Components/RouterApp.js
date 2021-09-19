import { BrowserRouter, Route, Switch, Redirect, NavLink } from "react-router-dom";
import Home from "./Home";
import Posts from "./Posts";
import About from "./About";
import NotFound from "./NotFound";

function PrivateRoute() {
  return(
    <BrowserRouter>
    <ul>
      <li><NavLink exact activeStyle={{color: 'red'}} to="/">Home</NavLink></li><br />
      <li><NavLink activeStyle={{color: 'red'}} to="/posts">Posts</NavLink></li><br />
      <li><NavLink activeStyle={{color: 'red'}} to="/about">About</NavLink></li><br />
    </ul>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/posts" component={Posts} />
      <Route path="/about" component={About} />
      <Route path="/home" component={Home}>
        <Redirect to="/" />
      </Route>
      <Route path="*" component={NotFound} />
    </Switch>
    </BrowserRouter>
  );
}

export default PrivateRoute;