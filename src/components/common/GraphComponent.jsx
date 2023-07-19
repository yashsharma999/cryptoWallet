import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Week 1",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Day 2",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Day 3",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Day 4",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
];

export default function GraphComponent({ format = 0 }) {
  const handleData = () => {
    switch (format) {
      case 0:
        return dayWiseData;
      case 1:
        return weekWise;
      case 2:
        return monthWise;
      case 3:
        return yearWise;
      default:
        return dayWiseData;
    }
  };
  return (
    <ResponsiveContainer height={200} width={300}>
      <AreaChart
        width={500}
        height={400}
        data={handleData()}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

const dayWiseData = [
  {
    name: "Day 1",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Day 2",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Day 3",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Day 4",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
];

const weekWise = [
  {
    name: "Week 1",
    uv: 3700,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Week 2",
    uv: 3500,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Week 3",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Week 4",
    uv: 3200,
    pv: 3908,
    amt: 2000,
  },
];

const monthWise = [
  {
    name: "Month 1",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Month 2",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Month 3",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Month 4",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
];

const yearWise = [
  {
    name: "Year 1",
    uv: 100,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Year 2",
    uv: 2000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Year 3",
    uv: 3000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Year 4",
    uv: 4000,
    pv: 3908,
    amt: 2000,
  },
];
