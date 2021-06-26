import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Admin from "./components/AdminManager/Admin/Admin";
import BlogsPost from "./components/AdminManager/BlogsPost/BlogsPost";
import ManageBlogs from "./components/AdminManager/ManageBlogs/ManageBlogs";
import BlogDetails from "./components/Home/BlogDetails/BlogDetails";
import Home from "./components/Home/Home/Home";
import Login from "./components/LoginManager/Login/Login";
import PrivateRoute from "./components/LoginManager/PrivateRoute/PrivateRoute";
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/blogDetails/:id">
            <BlogDetails />
          </Route>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <PrivateRoute path="/blogsPost">
            <BlogsPost />
          </PrivateRoute>
          <PrivateRoute path="/manageBlogs">
            <ManageBlogs />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
