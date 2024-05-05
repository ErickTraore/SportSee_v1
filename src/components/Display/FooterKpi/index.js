import React from "react"
import CustomLabel from "../../../components/CustomLabel"
import { PieChart, Pie, Cell, Label, ResponsiveContainer } from 'recharts';
const COLORS = ['#FFFFFF', 'red', '#FFFFFF', '#FFFFFF'];
const task1 = "de votre"
const task2 = "objectif"


const FooterKpi = ({todo}) => {
    console.log(todo)
    return (
     <ResponsiveContainer width={258} height={300}>
        <PieChart width={300} height={300} >
            <Pie data={todo?.data.score}
            cx={140}
            cy={120}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}  
            dataKey="value" 
            >
            {todo?.data.score.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                
          ))}

          <Label width={30} position="center"
          content={<CustomLabel value1={task1} value2={`${todo?.data.score[1].value}%`}value3={task2} />} />
        </Pie>
       
        </PieChart>
      </ResponsiveContainer>
    );
  }

  export default FooterKpi