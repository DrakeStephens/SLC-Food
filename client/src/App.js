import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Pages
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from './pages/Signup';
import AddRestaurant from './pages/AddResturuant'
import menuForm from './pages/menuForm'
//Components
import Nav from "./components/Nav"
import SingleRestaurant from './pages/SingleRestaurant';


//Apollo Client
const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql',
})



function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/restaurant/:id" component={SingleRestaurant} />
          <Route exact path="/AddRestaurant" component={AddRestaurant} />
          <Route exact path="/menuForm/:id" component={menuForm} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}


export default App;
