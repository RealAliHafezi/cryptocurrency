// icon
import {
  MdVerified,
  MdOutlineArrowDropDown,
  MdOutlineArrowDropUp,
} from "react-icons/md";
import { BsFillPatchExclamationFill } from "react-icons/bs";
// style
import "./CoinCoinVolume.css";
function CoinCoinVolume({ coin }) {
  // console.log(coin);
  return (
    <div className="CoinVolume w-100 row d-flex py-3 px-0 px-xs-2 mx-0 mt-1">
      <div className="CoinVolumeItem col-12 col-md-4 col-lg-3 d-block d-sm-flex align-items-center justify-content-between d-md-block py-3 px-3">
        <span className="CoinVolumeItemTitle d-block fw-bold text-secondary">
          Market Cap
          <BsFillPatchExclamationFill className="CoinVolumeItemTitleIcon ms-1" />
        </span>
        <div className="d-flex align-items-center d-md-block">
          <span className="d-block text-light fs-6 my-2 me-2 me-md-0">
            ${coin.market_cap && coin.market_cap.toLocaleString()}
          </span>
          {coin.price_change_percentage_24h > 0 ? (
            <span className="CoinVolumePercentage text-success fw-bold">
              <MdOutlineArrowDropUp className="CoinVPS p-0 m-0" />
              {coin.price_change_percentage_24h.toFixed(2)}%
            </span>
          ) : (
            <span className="CoinVolumePercentage text-danger fw-bold">
              <MdOutlineArrowDropDown className="CoinVPD p-0 m-0" />
              {coin.price_change_percentage_24h.toFixed(2)}%
            </span>
          )}
        </div>
      </div>
      <div className="CoinVolumeItem col-12 col-md-4 col-lg-3 d-block d-sm-flex align-items-center justify-content-between d-md-block py-3 px-3">
        <span className="CoinVolumeItemTitle fw-bold text-secondary">
          Fully Diluted Market Cap
          <BsFillPatchExclamationFill className="CoinVolumeItemTitleIcon ms-1" />
        </span>
        <div className="d-flex align-items-center d-md-block">
          <span className="d-block text-light fs-6 my-2 me-2 me-md-0">
            {coin.fully_diluted_valuation
              ? "$ " + coin.fully_diluted_valuation.toLocaleString()
              : "sorry. problem from API"}
          </span>
          {coin.price_change_percentage_24h > 0 ? (
            <span className="CoinVolumePercentage text-success fw-bold">
              <MdOutlineArrowDropUp className="CoinVPS p-0 m-0" />
              {coin.price_change_percentage_24h.toFixed(2)}%
            </span>
          ) : (
            <span className="CoinVolumePercentage text-danger fw-bold">
              <MdOutlineArrowDropDown className="CoinVPD p-0 m-0" />
              {coin.price_change_percentage_24h.toFixed(2)}%
            </span>
          )}
        </div>
      </div>
      <div className="CoinVolumeItem col-12 col-md-4 col-lg-3 d-flex flex-column justify-content-between d-md-block py-3 px-3">
        <div className="CoinVolumeItemT d-block d-sm-flex align-items-center justify-content-between d-md-block">
          <span className="CoinVolumeItemTitle fw-bold text-secondary">
            Volume
            <span className="h24 text-secondary rounded-3 mx-1">24h</span>
            <BsFillPatchExclamationFill className="CoinVolumeItemTitleIcon" />
          </span>
          <span className="d-block text-light fs-6 my-2">
            ${coin.total_volume && coin.total_volume.toLocaleString()}
          </span>
        </div>
        <div className="CoinVolumeItemB d-block d-sm-flex align-items-center justify-content-between d-md-block">
          <span className="CoinVolumeItemTitle fw-bold text-secondary">
            Volume / Market Cap
          </span>
          <span className="d-block text-light fs-6 my-2">
            {(coin.total_volume / coin.market_cap).toFixed(5)}
          </span>
        </div>
      </div>
      <div className="CoinVolumeItem col-12 col-lg-3 d-block d-sm-flex flex-column justify-content-between py-3 px-3">
        <div className="CoinVolumeItemT mb-md-5 mb-lg-0">
          <span className="CoinVolumeItemTitle fw-bold text-secondary">
            Circulating Supply
            <BsFillPatchExclamationFill className="CoinVolumeItemTitleIcon mx-1" />
            <MdVerified className="CoinVolumeVerifide" />
          </span>
          <div className="d-flex align-items-center justify-content-between p-0 m-0">
            <span className="d-block text-light fs-6 mt-2">
              {coin.circulating_supply &&
                coin.circulating_supply.toLocaleString()}{" "}
              BTC
            </span>
            <span className="text-secondary mt-2">
              {Math.round((coin.circulating_supply * 100) / coin.total_supply)}%
            </span>
          </div>
          <div className="w-100">
            <input
              readOnly={true}
              className="CoinSupplyRangeInp w-100"
              type="range"
              min={0}
              max={100}
              value={Math.round(
                (coin.circulating_supply * 100) / coin.total_supply
              )}
            />
          </div>
        </div>
        <div className="CoinVolumeItemB">
          <div className="d-flex align-items-center justify-content-between">
            <span className="CoinVolumeItemTitle fw-bold text-secondary">
              Max Supply{" "}
              <BsFillPatchExclamationFill className="CoinVolumeItemTitleIcon ms-1" />
            </span>
            <span className="CoinVolumeItemBT">
              {coin.total_supply && coin.total_supply.toLocaleString()}
            </span>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <span className="CoinVolumeItemTitle fw-bold text-secondary">
              Total Supply
              <BsFillPatchExclamationFill className="CoinVolumeItemTitleIcon ms-1" />
            </span>
            <span className="CoinVolumeItemBT">
              {coin.circulating_supply &&
                coin.circulating_supply.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoinCoinVolume;
