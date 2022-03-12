import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/store';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from '@apollo/client';
import fetch from 'cross-fetch';
import { MovieContextProvider } from './context/movieContext';
// @todo: solve cross fetch error
const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:4000/graphql', fetch }),
  cache: new InMemoryCache(),
});

export const AppData = () => {
  return (
    <Provider store={store}>
      <MovieContextProvider>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </MovieContextProvider>
    </Provider>
  );
};
// serverside rendering document not defined
if (typeof window !== 'undefined') {
  ReactDOM.render(
    <React.StrictMode>
      <AppData />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
