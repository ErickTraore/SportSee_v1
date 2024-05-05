import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";
  
  const ChartProfil = ({todo}) => {
    console.log(todo)

    return (
      <div className="chartProfil">
       <ResponsiveContainer width="100%" height={200}>
        <BarChart
          width={500}
          height={100}
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
            <Bar dataKey="calories" fill="#282D30" />
            <Bar dataKey="kilogram" fill="#FF0000" />
        </BarChart>
       </ResponsiveContainer>
      </div>
      );
  }

  export default ChartProfil