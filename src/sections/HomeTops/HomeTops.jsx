// icons
import { AiFillFire } from "react-icons/ai";
import { GiTronArrow, GiTopPaw } from "react-icons/gi";
import { BiTime } from "react-icons/bi";
import { SiMattermost } from "react-icons/si";
//
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CoinSliceFun } from "../../redux/CoinSlice";
// components
import HomeTopBox from "../../components/HomeTopBox/HomeTopBox";
// style
import "./HomeTops.css";
function HomeTops() {
  const BiggestGainers = useSelector((state) => state.Coin.BiggestGainers);
  const ThreeTop = useSelector((state) => state.Coin.Top);
  const ThreeBottom = useSelector((state) => state.Coin.Bottom);
  const dispatch = useDispatch();
  const Data = [
    {
      data: BiggestGainers.slice(0, 3),
      lable: "Biggest Gainers",
      lableIcon: (
        <span className="HomeTopBoxLableFire fs-3 ms-2">
          <AiFillFire />
        </span>
      ),
      price: true,
      percentage: true,
    },
    {
      data: ThreeTop.slice(0, 3),
      lable: "Three Top",
      lableIcon: (
        <span className="HomeTopBoxLableFire fs-3 ms-2">
          <GiTopPaw />
        </span>
      ),
      price: false,
    },
    {
      data: ThreeBottom.slice(0, 3),
      lable: "Three Bottom",
      lableIcon: (
        <span className="HomeTopBoxLableFire fs-3 ms-2">
          <GiTronArrow />
        </span>
      ),
      price: true,
      percentage: false,
    },
  ];
  useEffect(() => {
    dispatch(CoinSliceFun());
  }, [CoinSliceFun]);
  return (
    <div className="HomeTable px-3 px-md-5 pt-4 pb-2 my-2">
      <h1 className="fw-bolder fs-4 fs-md-5 my-3 ChartTitle d-flex align-items-center ">
        Most Cryptocurrencies
        <span className="HomeChartFire fs-3 ms-2">
          <SiMattermost />
        </span>
      </h1>
      <div className="row">
        {Data.length ? (
          Data.map((item, index) => <HomeTopBox key={index} data={item} />)
        ) : (
          <h1>Error Internet Connection</h1>
        )}
      </div>
      <span className="in24hourse d-flex mt-2 mb-0">
        <BiTime className="me-1" />
        In 24 Hourse
      </span>
    </div>
  );
}

export default HomeTops;
