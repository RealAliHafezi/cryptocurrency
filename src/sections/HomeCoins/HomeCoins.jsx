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
  const Filter = useSelector((state) => state.Coin.DataFilter);
  const [OptionIn, setOptionIn] = useState(null);
  const [filter, setFilter] = useState(20);
  const [Txt, setTxt] = useState("");

  const handleSearch = (e) => {
    // for input text changed
    dispatch(SearchResult({ txt: Txt, Data: OptionIn }));
    // for select and options changed
    if (e.target.selectedIndex === 0) {
      dispatch(HomeFilter({ Data: DataRank }));
      setOptionIn(DataRank);
    } else if (e.target.selectedIndex === 1) {
      dispatch(HomeFilter({ Data: DataBiggest }));
      setOptionIn(DataBiggest);
    } else if (e.target.selectedIndex === 2) {
      dispatch(HomeFilter({ Data: DataBottom }));
      setOptionIn(DataBottom);
    } else if (e.target.selectedIndex === 3) {
      dispatch(HomeFilter({ Data: DataTop }));
      setOptionIn(DataTop);
    }
  };
  return (
    <div className="HomeCoins px-1 px-sm-3 px-md-5 pt-4 pb-2 my-2">
      <div className="filterBox w-100 d-flex justify-content-between align-items-center">
        <form className="HomeCoins-SearchBox">
          <AiOutlineSearch className="HomeCoins-SearchBox-icon" />
          <input
            onChange={(e) => {
              handleSearch(e);
              setTxt(e.target.value);
            }}
            type="text"
            className="w-100 form-control py-2 px-3 fw-bold mx-1"
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
            Rank
          </option>
          <option value={1} className="HomeCoins-SelectOption">
            Biggest
          </option>
          <option value={2} className="HomeCoins-SelectOption">
            Biggest SetBack
          </option>
          <option value={3} className="HomeCoins-SelectOption">
            Tops
          </option>
        </select>
      </div>
      <ul className="HomeCoinsList w-100 px-4 pe-0 px-md-0 my-3 row">
        <li className="HomeCoinsItem HomeCoinsItem_title d-none d-lg-flex align-items-center px-4 py-1 mb-2">
          <div className="HomeCoinsItemImgBox align-items-center d-flex me-2">
            <span className="HomeCoinsItemIndex me-1">#</span>
            <span className="HomeCoinsItemImg HomeCoinItemImg_title"></span>
          </div>
          <div className="HomeCoinsItemInfo d-flex align-items-center">
            <div className="HomeCoinsItemNameBox mb-2 mb-lg-0">
              <span className="HomeCoinsItemName HomeCoinsItemName_title">
                Name
              </span>
              <span className="HomeCoinsItemSym ms-2 fw-bold"></span>
            </div>
            <div className="HomeCoinsItemDesc d-flex">
              <span className="HomeCoinsItemPrice HomeCoinsItemPrice_title">
                Price
              </span>
              <span className="HomeCoinsItemChanges HomeCoinsItemChanges_title">
                Changes
              </span>
              <span className="HomeCoinsItemMarketCap HomeCoinsItemMarketCap_title">
                Market Cap
              </span>
              <span className="HomeCoinsItemVolume HomeCoinsItemVolume_title">
                Volume
              </span>
            </div>
          </div>
        </li>
        {Filter.length ? (
          Filter.slice(0, filter).map((item, index) => (
            <HomeCoinsItem coin={item} key={index} index={index} />
          ))
        ) : (
          <div>error</div>
        )}
        <button
          className="HomeCoinItemBtn w-auto fw-bold py-2 px-3 mt-5 mt-md-4 mx-auto"
          onClick={(e) => {
            setFilter(Filter.length);
            e.target.style.display = "none";
          }}
        >
          Show More Coins
        </button>
      </ul>
    </div>
  );
}

export default HomeCoins;
