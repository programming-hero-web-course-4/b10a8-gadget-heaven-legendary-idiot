import { useLoaderData } from "react-router-dom";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  ComposedChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Area,
  Bar,
  Tooltip,
} from "recharts";

const Statistics = () => {
  const data3 = useLoaderData();
  const data = [
    { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 600, pv: 2000, amt: 2600 },
  ];
  // console.log(data3);
  const renderLineChart = (
    <ResponsiveContainer>
      <ComposedChart
        data={data3}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis
          dataKey="product_title"
          label={{
            position: "bottom",
            offset: 30,
          }}
          scale="band"
        />
        <YAxis
          label={{
            value: "Price",
            angle: -90,
            position: "insideLeft",
            offset: 0,
          }}
        />
        <Tooltip />
        <Legend align="center" verticalAlign="bottom" iconType="square" />
        <Area
          type="monotone"
          dataKey="price"
          fill="#9538E226"
          stroke="#9538E2"
        />
        <Bar dataKey="price" barSize={20} fill="#9538E2" />
        <Line type="monotone" dataKey="rating" stroke="#ff7300" />
      </ComposedChart>
    </ResponsiveContainer>
  );

  return (
    <div className="my-4 p-4 bg-white">
      <h2 className="text-3xl font-semibold my-3">Statistics</h2>
      <div className="w-full h-[350px] sm:h-[500px]">{renderLineChart}</div>
    </div>
  );
};

export default Statistics;
