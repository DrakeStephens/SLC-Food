import React from 'react';
//import { ApolloProvider } from '@apollo/react-hooks';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Pages
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from './pages/Signup';
//Components
import Nav from "./components/Nav"


//Apollo Client
//import ApolloClient from 'apollo-boost';
//const client = new ApolloClient({
// uri: 'http://localhost:3001/graphql'
//});



function App() {
  return (
    //<ApolloProvider client={client}>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </Router>
    //</ApolloProvider>
  );
}


export default App;
