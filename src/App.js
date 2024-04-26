import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; 
import './sass/mains.scss';
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Reglage from "./Pages/Reglage";
import Profil from "./Pages/User";
import BodyChart from "./Pages/BodyChart"
import ObjectifChart from "./Pages/ObjectifChart";
import NoPage from "./Pages/NoPage";


function App()  {
    
  return (
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/user/:idUser" element={<Profil />} />
          <Route path="/reglage" element={<Reglage />} />
          <Route path="/objectifChart" element={<ObjectifChart />} />
          <Route path="/bodyChart" element={<BodyChart/>} />
          <Route path="*" element={<NoPage />} /> 
          </Route>
       </Routes>
    </BrowserRouter> 
  )
}

export default App;


