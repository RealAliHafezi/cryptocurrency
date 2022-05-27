//
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
// style
import "./Chart.css";
function Chart(props) {
  //
  const data = [
    {
      name: props.data[0].name,
      MinPrice: props.data[0].low_24h,
      MaxPrice: props.data[0].high_24h,
      CurrentPrice: props.data[0].current_price,
    },
    {
      name: props.data[1].name,
      MinPrice: props.data[1].low_24h,
      MaxPrice: props.data[1].high_24h,
      CurrentPrice: props.data[1].current_price,
    },
    {
      name: props.data[2].name,
      MinPrice: props.data[2].low_24h,
      MaxPrice: props.data[2].high_24h,
      CurrentPrice: props.data[2].current_price,
    },
  ];

  return (
    <div className="col-11 col-md-10 col-lg-8 Chart mx-0 mx-md-auto">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{
            top: 10,
            right: 15,
            left: 15,
            bottom: 10,
          }}
        >
          <CartesianGrid stroke="var(--purple)" />
          <XAxis
            dataKey="name"
            tickMargin={10}
            tick={{ fill: "#fff", fontSize: "12px" }}
          />
          <YAxis tick={{ fill: "#fff", fontSize: "14px" }} tickMargin={5} />
          <Tooltip
            contentStyle={{ backgroundColor: "var(--blue)", color: "white" }}
            itemStyle={{ color: "white" }}
            cursor={false}
          />
          <Bar dataKey="MinPrice" fill="#8884d8" />
          <Bar dataKey="CurrentPrice" fill="#82ca9d" />
          <Bar dataKey="MaxPrice" fill="#ffc658" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
