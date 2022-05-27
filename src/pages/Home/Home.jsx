// style
import HomeChart from "../../sections/HomeChart/HomeChart";
import HomeCoins from "../../sections/HomeCoins/HomeCoins";
import HomeTops from "../../sections/HomeTops/HomeTops";
import "./Home.css";
function Home() {
  return (
    <div className="Home container-fluid px-0 px-sm-2 px-md-5">
      <HomeChart />
      <HomeTops />
      <HomeCoins />
    </div>
  );
}

export default Home;
