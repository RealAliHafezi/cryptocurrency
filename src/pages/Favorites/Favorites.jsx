import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RemoveFromFavorite } from "../../redux/CoinSlice";
// style
import "./Favorite.css";
function Favorites() {
  const dispatch = useDispatch();
  const [Data, setData] = useState([]);
  const DataFavorite = useSelector((state) => state.Coin.Favorite);
  const hnaldeRemoveFromFavorite = (e, ID) => {
    e.preventDefault();
    dispatch(RemoveFromFavorite({ ID }));
  };
  useEffect(() => {
    const DATA = localStorage.getItem("favorite");
    const data = JSON.parse(DATA);
    setData(data);
  }, [DataFavorite]);
  return (
    <div className="Favorite d-grid m-0 px-4">
      {Data ? (
        Data.map((coin, index) => (
          <div key={index} className="FavoriteCard card mb-2">
            <img
              src={coin.image}
              className="card-img-top w-75 mx-auto rounded-circle mt-3 mb-1"
              alt={coin.name}
            />
            <div className="card-body">
              <h2 className="card-title fw-bold">{coin.name}</h2>
              <p className="card-text mb-1">Rank : #{coin.market_cap_rank}</p>
              <p className="card-text mb-1">
                Price : ${coin.current_price.toLocaleString()}
              </p>
              <p className="card-text mb-1">
                Price : ${coin.market_cap.toLocaleString()}
              </p>
              <div className="d-flex align-items-center flex-column flex-md-row justify-content-md-between mt-3 mt-md-1">
                <Link
                  to={`/${coin.name}`}
                  className="FavoriteBtnShowMore btn text-light mb-2 mb-md-0"
                >
                  Show More
                </Link>
                <span
                  className="FavoriteBtnRemove btn btn-outline-danger text-light rounded-3 ms-2 px-1 py-2"
                  onClick={(e) => hnaldeRemoveFromFavorite(e, coin.id)}
                >
                  Remove From Favorite
                </span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h1>null</h1>
      )}
    </div>
  );
}

export default Favorites;
