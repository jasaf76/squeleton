import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MoralisProvider } from "react-moralis";
import { TransactionsProvider } from "./context/TransactionContext";
import { CoinMarketProvider } from "./context/context";
import "./styles/index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MoralisProvider
      serverUrl="https://zloqy7uokpqs.usemoralis.com:2053/server"
      appId="LwgSVFfznMyC82Nih1wfQseSm8lf2dfEmwkSSucK">
      <CoinMarketProvider>
        <TransactionsProvider>
          <App />
        </TransactionsProvider>
      </CoinMarketProvider>
    </MoralisProvider>
  </React.StrictMode>
);
