import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";
  
  const ChartProfil = ({todo}) => {
    console.log(todo)

    return (
      <div className="chartProfil">
       <ResponsiveContainer width="75%" height={250}>
        <BarChart
          width={500}
          height={300}
          data={todo && todo.data.sessions}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis />
            <YAxis orientation="right" />
            <Tooltip />
            <Legend />
            <Bar dataKey="calories" fill="#82ca9d" />
            <Bar dataKey="kilogram" fill="#82cxa9s" />
        </BarChart>
       </ResponsiveContainer>
      </div>
      );
  }

  export default ChartProfil