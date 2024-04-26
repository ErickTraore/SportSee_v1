import { useEffect, useState } from "react";
import ChartReglage from "../chartReglage";

export default function Reglage() {
  const [data, setData] = useState()

  useEffect(() => {
    const fetchDatas = async () => {
      const res = await fetch("https://api.coincap.io/v2/assets/?limit=20");
      const data = await res.json();
      console.log(data);
      setData(data?.data);
    };
    fetchDatas();
  }, []);

  return <div className="Reglage"> Reglage: How to use Recharts with React 
            <ChartReglage data={data} />
         </div>;
}