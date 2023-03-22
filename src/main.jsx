import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import SongContextProvider from "./SongContext";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

let client = new ApolloClient({
  uri: "https://api.ss.dev/resource/api",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <SongContextProvider>
          <App />
        </SongContextProvider>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
