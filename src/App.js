import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; 
import './sass/mains.scss';
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Reglage from "./Pages/Reglage";
import Profil from "./Pages/User";
import Communaute from "./Pages/Communaute";
import NoPage from "./Pages/NoPage";


function App()  {
  // fetch('http://localhost:3000/user/12')
  // .then((response) => {
  //     return response.json()
  // })
  // .then((results) => {
  //     this.setState({posts: results}) 

  //   console.log("data",results.data)
  //   console.log("data",results.data)
  //   console.log("id",results.data.id)
  //   console.log("todayScore",results.data.todayScore)
  //   console.log("userInfos ",results.data.userInfos.firstName )
  // console.log(results.posts.data.todayScore)
  // })
    
  return (
    // <div>
    //   <h2>Je suis un yankee: {}</h2>
    //       {/* {this.posts?.data.id} */}
    // </div>
    // <div>
    //   <p>{data}</p>    
    //   </div>
    // </div>
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/user/:idUser" element={<Profil />} />
          <Route path="/reglage" element={<Reglage />} />
          <Route path="/communaute" element={<Communaute />} />
          <Route path="*" element={<NoPage />} /> 
          </Route>
       </Routes>
    </BrowserRouter> 
  )
}
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);


export default App;


