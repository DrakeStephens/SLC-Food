import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql'
});


function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>Drake Was HERE!</h1>
      </div>
    </ApolloProvider>
  );
}


export default App;
