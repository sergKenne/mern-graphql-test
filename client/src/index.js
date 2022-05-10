import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from '@apollo/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        //uri: '/graphql',
        uri: 'http://localhost:5000/graphql',
    }),
});

root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
);

