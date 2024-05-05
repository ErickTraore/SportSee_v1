import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; 
import './sass/mains.scss';
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import reglage from "./Pages/RadarChart";
import Profil from "./Pages/User";
import BodyChart from "./Pages/BodyChart"
import ObjectifChart from "./Pages/ObjectifChart";
import NoPage from "./Pages/NoPage";
import RadarChart from "./Pages/RadarChart";
import KpiChart from "./Pages/KpiChart";
import Cards from "./Pages/Cards";
function App()  {
    
  return (
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/user/:idUser" element={<Profil />} />
          <Route path="/reglage" element={<RadarChart />} />
          <Route path="/kpiChart" element={<KpiChart />} />
          <Route path="/objectifChart" element={<ObjectifChart />} />
          <Route path="/bodyChart" element={<BodyChart/>} />
          <Route path="/cards" element={<Cards/>} />
          <Route path="*" element={<NoPage />} /> 
          </Route>
       </Routes>
    </BrowserRouter> 
  )
}

export default App;


