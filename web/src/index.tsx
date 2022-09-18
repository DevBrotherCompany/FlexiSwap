import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";

import { apolloClient } from "./packages/graphql";
import { Web3Connector } from "./shared/Web3Connector/Web3Connector";
import { store } from "./storage/store";

import App from "./components/App/App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <Web3Connector>
          <App />
        </Web3Connector>
      </ApolloProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
