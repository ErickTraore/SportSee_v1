import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  } from "recharts";
  
  const FooterObjectif = ({todo}) => {
    console.log(todo)

    return (
       <ResponsiveContainer width={500} height={250}>
          <LineChart
            width={500}
            height={300}
            data={todo?.data.sessions}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis axisLine={false} />
          <YAxis tick={false}  axisLine={false} />
          <Tooltip />
          <Line type="monotone"  stroke="#8884d8"  dataKey="sessionLength"  />
          </LineChart>
       </ResponsiveContainer>

      );
  }

  export default FooterObjectif