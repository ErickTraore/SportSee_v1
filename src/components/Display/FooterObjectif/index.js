import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  } from "recharts";
  
  const FooterObjectif = ({todo}) => {
    console.log(todo)

    return (
      <ResponsiveContainer ResponsiveContainer width={258} height={300}>
          <LineChart
            width={300}
            height={300}
            data={todo?.data.sessions}
            margin={{
              top: 0,
              right: 10,
              left: -50,
              bottom: 0
            }}
          >
          <XAxis axisLine={false} />
          <YAxis tick={false}  axisLine={false} />
          <Tooltip />
          <Line type="monotone"  stroke="white"  dataKey="sessionLength"  />
          </LineChart>
       </ResponsiveContainer>

      );
  }

  export default FooterObjectif