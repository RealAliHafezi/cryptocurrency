// libraries
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { CoinSliceFun } from "../../redux/CoinSlice";
import { useDispatch } from "react-redux";
// style
import "./Coin.css";
// components
import CoinCoinInfo from "../../components/CoinCoinInfo/CoinCoinInfo";
import CoinCoinVolume from "../../components/CoinCoinVolume/CoinCoinVolume";
import CoinCoinVolumeChart from "../../components/CoinCoinVolumeChart/CoinCoinVolumeChart";
import CoinNavbar from "../../sections/CoinNavbar/CoinNavbar";
function Coin() {
  const [scroll, setScroll] = useState(false);
  const { CoinName } = useParams();
  // for page title
  document.title = `CALI | ${CoinName}`;
  // for dispatching data
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.Coin.Data);
  const coin = Data.find((item) => item.name === CoinName);
  useEffect(() => {
    dispatch(CoinSliceFun());
  }, [CoinSliceFun()]);
  useEffect(() => {
    window.scrollY >= 150 ? setScroll(true) : setScroll(false);
  }, [window.scrollY]);
  return coin ? (
    <div className="Coin w-100 p-0 m-0">
      <CoinNavbar coin={coin} scroll={scroll} />
      <div className="CoinContainer w-100 py-5 px-1">
        <CoinCoinInfo coin={coin} />
        <CoinCoinVolume coin={coin} />
        <CoinCoinVolumeChart coin={coin} />
      </div>
    </div>
  ) : (
    <h1>Error In Give Coin</h1>
  );
}

export default Coin;
