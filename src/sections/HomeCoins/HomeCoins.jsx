import { SearchResult, HomeFilter } from "../../redux/CoinSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
// icon
import { AiOutlineSearch } from "react-icons/ai";
// style
import "./HomeCoins.css";
import HomeCoinsItem from "../../components/HomeCoinsItem/HomeCoinsItem";
function HomeCoins() {
  const dispatch = useDispatch();
  const DataBiggest = useSelector((state) => state.Coin.BiggestGainers);
  const DataTop = useSelector((state) => state.Coin.Top);
  const DataBottom = useSelector((state) => state.Coin.Bottom);
  const DataRank = useSelector((state) => state.Coin.MarketRank);
  const [OptionIn, setOptionIn] = useState(null);
  const [Txt, setTxt] = useState("");

  const handleSearch = (e) => {
    // for input text changed
    dispatch(SearchResult({ txt: e.target.value, Data: OptionIn }));
    // for select and options changed
    if (e.target.selectedIndex === 0) {
      dispatch(HomeFilter({ Data: DataTop }));
      setOptionIn(DataTop);
    } else if (e.target.selectedIndex === 1) {
      dispatch(HomeFilter({ Data: DataBiggest }));
      setOptionIn(DataBiggest);
    } else if (e.target.selectedIndex === 2) {
      dispatch(HomeFilter({ Data: DataBottom }));
      setOptionIn(DataBottom);
    } else if (e.target.selectedIndex === 3) {
      dispatch(HomeFilter({ Data: DataRank }));
      setOptionIn(DataRank);
    }
  };
  return (
    <div className="HomeCoins px-3 px-md-5 pt-4 pb-2 my-2">
      <div className="filterBox w-100 d-flex justify-content-between align-items-center">
        <form className="HomeCoins-SearchBox">
          <AiOutlineSearch className="HomeCoins-SearchBox-icon" />
          <input
            onChange={(e) => {
              handleSearch(e);
              setTxt(e.target.value);
            }}
            type="text"
            className="w-100 form-control py-2 px-3 fw-bold"
            placeholder="Search Coin..."
          />
        </form>
        <select
          className="form-select w-25 HomeCoins-Select"
          aria-label="Default select example"
          onChange={(e) => {
            handleSearch(e);
          }}
        >
          <option selected value={0} className="HomeCoins-SelectOption">
            Tops
          </option>
          <option value={1} className="HomeCoins-SelectOption">
            Biggest
          </option>
          <option value={2} className="HomeCoins-SelectOption">
            Biggest SetBack
          </option>
          <option value={3} className="HomeCoins-SelectOption">
            Rank
          </option>
        </select>
      </div>
      <ul className="HomeCoinsList w-100 p-0 my-3">
        <li className="HomeCoinsItem HomeCoinsItem_title w-100 d-flex align-items-center px-2">
          <div className="HomeCoinsItemLeft d-flex align-items-center">
            <span className="HomeCoinsItemKey me-2">#</span>
            <span className="HomeCoinsItemImg"></span>
            <span className="HomeCoinsItemName HomeCoinsItemName_title  fw-normal ms-2">
              Name
            </span>
          </div>
          <div className="HomeCoinsItemCnter d-flex align-items-center">
            <span className="HomeCoinsItemPrice HomeCoinsItemPrice_title fw-bold ms-2">
              price
            </span>
            <span className="HomeCoinsItemChanges HomeCoinsItemChanges_title fw-bold ms-2">
              Changes
            </span>
            <span className="HomeCoinsItemMarketCap HomeCoinsItemMarketCap_title fw-bold ms-4">
              Market Cap
            </span>
            <span className="HomeCoinsItemVolume HomeCoinsItemVolume_title fw-bold ms-4">
              Volume
            </span>
          </div>
        </li>

        <HomeCoinsItem />
      </ul>
    </div>
  );
}

export default HomeCoins;
