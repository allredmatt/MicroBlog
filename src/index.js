import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {FAUNA_KEY} from './.faunarc.js'  //imports key for your faunaDB have to generate your own and add to function in this file

import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';
import { setContext } from '@apollo/link-context';

const httpLink = createHttpLink({
  uri: 'https://graphql.fauna.com/graphql',
});

const authLink = setContext((_, { headers }) => {

  const token = FAUNA_KEY; //just expects a export const FAUNA_KEY = your secret key

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
      "X-Schema-Preview": "partial-update-mutation"
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
