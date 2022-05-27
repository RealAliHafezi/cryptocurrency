//
import { useSelector } from "react-redux";
// style
import "./HomeCoinsItem.css";
function HomeCoinsItem() {
  const Data = useSelector((state) => state.Coin.DataFilter);
  console.log(Data);
  return Data.length ? (
    Data.map((coin, index) => (
      <li
        className="HomeCoinsItem w-100 d-flex align-items-center py-3 px-2"
        key={index}
      >
        <div className="HomeCoinsItemLeft d-flex align-items-center">
          <span className="HomeCoinsItemKey me-1">{index + 1} -</span>
          <img src={coin.image} alt={coin.name} className="HomeCoinsItemImg" />
          <span className="HomeCoinsItemName fw-normal ms-2">{coin.name}</span>
          <span className="HomeCoinsItemSymbol fw-bold ms-2">
            {coin.symbol}
          </span>
        </div>
        <div className="HomeCoinsItemCnter d-flex align-items-center">
          <span className="HomeCoinsItemPrice fw-bold text-light me-2">
            $ {coin.current_price.toLocaleString()}
          </span>
          {coin.price_change_percentage_24h > 0 ? (
            <span className="HomeCoinsItemChanges text-success fw-bold ms-2">
              {coin.price_change_percentage_24h.toFixed(2)} %
            </span>
          ) : (
            <span className="HomeCoinsItemChanges text-danger fw-bold ms-2">
              {coin.price_change_percentage_24h.toFixed(2)} %
            </span>
          )}
          <span className="HomeCoinsItemMarketCap fw-bold text-light ms-4">
            $ {coin.market_cap.toLocaleString()}
          </span>
          <span className="HomeCoinsItemVolume fw-bold text-light ms-4">
            $ {coin.total_volume.toLocaleString()}
          </span>
        </div>
      </li>
    ))
  ) : (
    <h1>Not Coin</h1>
  );
}

export default HomeCoinsItem;
