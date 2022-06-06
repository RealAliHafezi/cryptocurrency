// icon
import { MdOutlineArrowDropUp, MdOutlineArrowDropDown } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";
// style
import "./CoinCoinInfo.css";
function CoinCoinInfo({ coin }) {
  return (
    <div className="CoinTopSec d-flex align-items-left align-items-md-center justify-content-md-between flex-column flex-md-row pb-5 px-3 pb-0">
      <div className="CoinInfoL d-flex flex-column">
        <div className="CoinInfoLT d-flex align-items-center mb-2">
          <img src={coin.image} alt={coin.name} className="CoinImage" />
          <span className="CoinName fw-bold fs-1 my-0 mx-3">{coin.name}</span>
          <span className="CoinSym d-none d-sm-block py-0 px-1 me-3">
            {coin.symbol}
          </span>
          <span
            className="CoinLike position-relative border border-secondary rounded-3 py-0 px-1"
            data-hover="Add to Favorite Page"
          >
            <AiOutlineStar />
          </span>
        </div>
        <div className="CoinInfoLB d-flex align-items-center mb-3 mb-md-0">
          <span className="CoinCoin bg-secondary text-light rounded-3 me-2">
            Coin
          </span>
          <span className="CoinRank bg-light text-dark rounded-3 fw-bold">
            Rank #{coin.market_cap_rank}
          </span>
        </div>
      </div>
      <div className="CoinInfoR text-start text-md-end">
        <span className="CoinPriceDesc text-secondary fw-normal">
          {coin.name} Price ({coin.symbol})
        </span>
        <div className="CoinPriceBox d-flex align-items-center justify-content-between justify-content-md-end mt-1 mb-2">
          <h1 className="d-block fs-2 fw-bold me-2">
            ${coin.current_price.toLocaleString()}
          </h1>
          {coin.price_change_percentage_24h > 0 ? (
            <span className="CoinPercentage bg-success fw-bold ps-1 pe-2 py-1 mb-3 rounded-3">
              <MdOutlineArrowDropUp className="CoinPrecentageIcon p-0 m-0" />
              {coin.price_change_percentage_24h.toFixed(2)}%
            </span>
          ) : (
            <span className="CoinPercentage bg-danger fw-bold ps-1 pe-2 py-1 mb-3 rounded-3">
              <MdOutlineArrowDropDown className="CoinPrecentageIcon p-0 m-0" />
              {coin.price_change_percentage_24h.toFixed(2)}%
            </span>
          )}
        </div>
        <div className="CoinPriceRange d-flex align-items-center flex-column flex-md-row">
          <span className="CoinPriceRangeLow d-none d-md-block text-light">
            <p className="text-secondary d-inline">Low:</p> ${coin.low_24h}
          </span>
          <div className="ResCoinPriceRangeValue w-100 d-flex justify-content-between mb-2 d-md-none">
            <span className="CoinPriceRangeLow text-light">
              <p className="text-secondary d-inline">Low:</p> $
              {coin.low_24h.toLocaleString()}
            </span>
            <span className="CoinPriceRangeHigh text-light">
              <p className="text-secondary d-inline">High:</p> $
              {coin.high_24h.toLocaleString()}
            </span>
          </div>
          <input
            className="CoinPriceRangeInp mx-0 mx-md-2"
            readOnly={true}
            type="range"
            min={coin.low_24h}
            max={coin.high_24h}
            value={coin.current_price}
          />
          <span className="CoinPriceRangeHigh d-none d-md-block text-light">
            <p className="text-secondary d-inline">High:</p> ${coin.high_24h}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CoinCoinInfo;
