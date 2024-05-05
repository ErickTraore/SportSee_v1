import {
    Radar, 
    RadarChart, 
    PolarGrid, 
    PolarAngleAxis, 
    PolarRadiusAxis, 
    ResponsiveContainer
  } from "recharts";
  
   const FooterRadar = ({todo}) => {
    console.log(todo)
    return (
      <ResponsiveContainer width={258} height={263}>
        <RadarChart 
        cx="47%" 
        cy="50%" 
        outerRadius="40%" 
        data={todo?.data.data}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="kind" />
          <PolarRadiusAxis />
          <Radar name="Mike" dataKey="value" stroke="#8884d8" fill="red" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    );
  }

  export default FooterRadar