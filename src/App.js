import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; 
import './sass/mains.scss';
import Layout from "./components/Pages/Layout";
import NoPage from "./components/Pages/NoPage";


export default function App() {
  return (
    // <div>
    //   Je suis un yankee
    // </div>
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="*" element={<NoPage />} /> 
          </Route>
       </Routes>
    </BrowserRouter> 
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);





