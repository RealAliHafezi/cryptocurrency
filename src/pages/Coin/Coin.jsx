import React from "react";
import { useParams } from "react-router-dom";
function Coin() {
  const { CoinId } = useParams();
  console.log(CoinId);
  return <div>Coin</div>;
}

export default Coin;
