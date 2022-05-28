import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
function Coin() {
  const [coin, setCoin] = useState(null);
  const { CoinName } = useParams();
  const Data = useSelector((state) => state.Coin.Data);
  useEffect(() => {
    setCoin(Data.find((item) => item.name === CoinName));
  }, []);
  return (
    <div className="Coin">
      {coin ? <div>{coin.market_cap_rank}</div> : <h1>error</h1>}
    </div>
  );
}

export default Coin;
