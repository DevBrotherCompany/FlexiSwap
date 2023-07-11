"use client";

import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "@/packages/graphql";
import { Provider } from "react-redux";
import { Web3Connector } from "@/shared/Web3Connector/Web3Connector";
import { store } from "@/storage/store";
import { ThemeProvider } from "@mui/material";
import { darkTheme } from "@/styles/theme";
import ToastProvider from "../ToastProvider/ToastProvider";

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={darkTheme}>
          <Web3Connector>
            <ToastProvider>{children}</ToastProvider>
          </Web3Connector>
        </ThemeProvider>
      </ApolloProvider>
    </Provider>
  );
};
