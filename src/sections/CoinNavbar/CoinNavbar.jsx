import { useDispatch } from "react-redux";
import { AddToFavorite } from "../../redux/CoinSlice";
// icon
import { AiOutlineStar } from "react-icons/ai";
import { MdOutlineArrowDropUp, MdOutlineArrowDropDown } from "react-icons/md";
// style
import "./CoinNavbar.css";
function CoinNavbar({ coin, scroll }) {
  const dispatch = useDispatch();
  const handleAddToFavorite = (e, ID) => {
    e.preventDefault();
    dispatch(AddToFavorite({ ID }));
  };
  return (
    <nav
      className={
        scroll
          ? "CoinNavActive w-100 d-block px-2 px-md-3 py-3"
          : "CoinNav w-100 d-block px-2 px-md-3 py-3"
      }
    >
      <div className="d-flex justify-content-between align-items-center">
        <div className="CoinNavbarInfo d-flex align-items-center">
          <img
            src={coin.image}
            alt={coin.name}
            className="CoinNavbarImage rounded-circle"
          />
          <span className="CoinNavbarName fw-bold ms-2">{coin.name}</span>
          <span className="CoinNavbarName d-none d-sm-block fw-bold ms-2 text-secondary">
            {coin.symbol.toUpperCase()}
          </span>
        </div>
        <div className="CoinNavbarPriceBox d-flex align-items-center">
          <span className="CoinNavbarPrice fw-bold">
            <p className="CoinNavbarPercentage d-inline fw-normal text-secondary">
              Price:{" "}
            </p>
            ${coin.current_price.toLocaleString()}
          </span>
          {coin.price_change_percentage_24h > 0 ? (
            <span className="CoinNavbarPercentage bg-success fw-bold ps-1 pe-2 py-1 ms-2 rounded-3">
              <MdOutlineArrowDropUp className="CoinPrecentageIcon p-0 m-0" />
              {coin.price_change_percentage_24h.toFixed(2)}%
            </span>
          ) : (
            <span className="CoinNavbarPercentage bg-danger fw-bold ps-1 pe-2 py-1 ms-2 rounded-3">
              <MdOutlineArrowDropDown className="CoinPrecentageIcon p-0 m-0" />
              {coin.price_change_percentage_24h.toFixed(2)}%
            </span>
          )}
          <div
            className="CoinNavbarFavorite d-none d-sm-block btn border border-secondary py-1 ms-3"
            onClick={(e) => handleAddToFavorite(e, coin.id)}
          >
            <span>Add To Favorite List</span>
            <AiOutlineStar className="ms-1" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default CoinNavbar;
