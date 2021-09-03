import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Navbar} from "./components/navbar.component";
import {UserList} from "./components/userList.component";
import {CreateUser} from "./components/createUser.component";
import {EditUser} from "./components/editUser.component";
import {DeleteUser} from "./components/deleteUser.component";
import {PageNotFound} from "./components/pageNotFound.component";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={UserList}/>
        <Route path="/create" component={CreateUser} />
        <Route path="/edit/:id" component={EditUser} />
        <Route path="/delete/:id" component={DeleteUser} />
        <Route component={PageNotFound} />
      </Switch>
  </Router>
  );
}

export default App;
