import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';

//create an Apollo Provider to make every request work with the Apollo Server

const httpLink = createHttpLink({
  uri: '/graphql',
});

//middleware that gives JWT to request as an auth header
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

function App() {
  return (
  <ApolloProvider client={client}>
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route 
            path='/' 
            component={SearchBooks}
          />
          <Route 
            path='/saved' 
            element={SavedBooks} 
          />
          <Route 
            render={() => <h1 className='display-2'>Wrong page!</h1>}
          />
        </Switch>
      </>
    </Router>
  </ApolloProvider>
  );
}

export default App;
