//
import { Link } from "react-router-dom";
// icon
import { RiHeartFill } from "react-icons/ri";
// style
import "./HomeCoinsItem.css";
function HomeCoinsItem({ coin, index }) {
  return (
    <Link to={`/${coin.name}`} className="Link my-lg-0 my-2">
      <li className="HomeCoinsItem w-100 col-12 col-md-6 col-lg-12 d-flex align-items-center flex-column flex-sm-row py-3 px-1 p-lg-2">
        <div className="HomeCoinsItemImgBox d-flex align-items-center me-0 me-sm-5 me-lg-2 mb-3 mb-sm-0">
          <span className="HomeCoinsItemIndex d-none d-lg-block me-1">
            {index + 1} -
          </span>
          <img src={coin.image} alt={coin.name} className="HomeCoinsItemImg" />
        </div>
        <div className="HomeCoinsItemInfo d-flex align-items-center flex-column flex-lg-row">
          <div className="HomeCoinsItemNameBox mb-2 mb-lg-0">
            <span className="HomeCoinsItemName">
              <span className="d-inline-block me-1 d-lg-none text-secondary">
                Name :{" "}
              </span>
              {coin.name}
            </span>
            <span className="HomeCoinsItemSym ms-2 text-secondary fw-bold">
              {coin.symbol}
            </span>
          </div>
          <div className="HomeCoinsItemDesc d-flex flex-column flex-lg-row">
            <span className="HomeCoinsItemPrice">
              <span className="d-inline-block me-2 d-lg-none text-secondary">
                Price :{" "}
              </span>
              ${coin.current_price}
            </span>
            {coin.price_change_percentage_24h > 0 ? (
              <span className="HomeCoinsItemChanges text-success fw-bold pb-1 p-md-0">
                <span className="d-inline-block me-2 d-lg-none text-secondary">
                  Changes :{" "}
                </span>
                {coin.price_change_percentage_24h.toFixed(2)} %
              </span>
            ) : (
              <span className="HomeCoinsItemChanges text-danger fw-bold pb-1 p-md-0">
                <span className="d-inline-block me-2 d-lg-none text-secondary fw-normal">
                  Changes :{" "}
                </span>
                {coin.price_change_percentage_24h.toFixed(2)} %
              </span>
            )}
            <span className="HomeCoinsItemMarketCap text-light pb-1 p-md-0">
              <span className="d-inline-block me-1 d-lg-none text-secondary">
                Market Cap :{" "}
              </span>
              $ {coin.market_cap.toLocaleString()}
            </span>
            <span className="HomeCoinsItemVolume text-light mb-2 mb-sm-0">
              <span className="d-inline-block me-1 d-lg-none text-secondary">
                Volume :{" "}
              </span>
              $ {coin.total_volume.toLocaleString()}
            </span>
          </div>
        </div>
        <Link to={`/${coin.name}`} className="Link d-block d-sm-none">
          <button className="HomeCoinItemBtn fw-bold py-2 px-3 mt-3">
            Show More
          </button>
        </Link>
      </li>
    </Link>
  );
}

export default HomeCoinsItem;
