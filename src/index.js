import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [coinList, setCoinList] = useState([]);
  const [coin, setCoin] = useState([]);

  const handleChange = e => {
    setCoin(e.target.value);
  }

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coin}&order=market_cap_desc&per_page=10&page=1&sparkline=true`
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, [coin]);

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/list'
      )
      .then(res => setCoinList(res.data))
      .catch(err => console.log(err));
  }, [])

  return (
    <div className="App">
      <Navbar coinList={coinList} coin={coin} handleChange={handleChange} />
      <Charts coinData={coinData} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
