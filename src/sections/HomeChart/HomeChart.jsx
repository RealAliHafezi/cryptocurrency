//
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CoinSliceFun } from "../../redux/CoinSlice";
// icon
import { AiFillFire } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
// components
import Chart from "../../components/Chart/Chart";
// style
import "./HomeChart.css";

function HomeChart() {
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.Coin.ThreeTop);
  useEffect(() => {
    dispatch(CoinSliceFun());
  }, [CoinSliceFun]);
  return (
    <div className="HomeChart px-3 px-md-5 py-2 my-2 position-relative">
      <h1 className="fw-bolder fs-6 fs-md-5 mt-3 mb-4 ChartTitle d-flex align-items-center ">
        Three Top Cryptocurrency{" "}
        <span className="HomeChartFire fs-3 ms-2">
          <AiFillFire />
        </span>
      </h1>
      {Data.length > 0 && <Chart data={Data} />}
      <span className="in24hourse d-flex my-2">
        <BiTime className="me-1" />
        In 24 Hourse
      </span>
    </div>
  );
}

export default HomeChart;
