import {
  LineChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
} from "recharts";
function CoinCoinVolumeChart({ coin }) {
  //   console.log(coin);
  const data = {
    Price: [
      {
        name: "min Price",
        value: coin.low_24h,
      },
      {
        name: "max Price",
        value: coin.high_24h,
      },
    ],
    AT: [
      {
        name: "atl",
        value: coin.atl,
      },
      {
        name: "ath",
        value: coin.ath,
      },
    ],
  };
  return (
    <div className="row pt-5 px-3 px-md-2">
      <div className="col-12 col-md-6 py-2 mb-3 mb-m0">
        <ResponsiveContainer width="100%" height={300} className="chart">
          <LineChart
            data={data.AT}
            margin={{
              top: 10,
              right: 10,
              left: 10,
              bottom: 10,
            }}
          >
            <CartesianGrid
              stroke="white"
              strokeOpacity="0.5"
              strokeDasharray="3 3"
            />
            <XAxis
              dataKey="name"
              tickMargin={10}
              tick={{ fill: "#fff", fontSize: "12px" }}
            />
            <YAxis tick={{ fill: "#fff", fontSize: "14px" }} tickMargin={5} />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--blue)",
                color: "white",
              }}
              itemStyle={{ color: "white" }}
              cursor={false}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="var(--purple)"
              strokeWidth="2px"
              activeDot={{ r: 8, color: "red" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="col-12 col-md-6 py-2">
        <ResponsiveContainer width="100%" height={300} className="chart">
          <BarChart
            data={data.Price}
            margin={{
              top: 10,
              right: 10,
              left: 10,
              bottom: 10,
            }}
          >
            <CartesianGrid
              stroke="white"
              strokeOpacity="0.5"
              strokeDasharray="4 4"
            />
            <XAxis
              dataKey="name"
              tickMargin={10}
              tick={{ fill: "#fff", fontSize: "12px" }}
            />
            <YAxis tick={{ fill: "#fff", fontSize: "14px" }} tickMargin={5} />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--purple)",
                color: "white",
              }}
              itemStyle={{ color: "white" }}
              cursor={false}
            />
            <Bar dataKey="value" fill="var(--blue)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default CoinCoinVolumeChart;
