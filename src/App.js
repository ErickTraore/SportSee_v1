import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; 
import './sass/mains.scss';
import Layout from "./components/Pages/Layout";
import TestData from "./components/Pages/TestData";
import NoPage from "./components/Pages/NoPage";


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
            <Route path="/TestData" element={<TestData />} />
            <Route path="*" element={<NoPage />} /> 
          </Route>
       </Routes>
    </BrowserRouter> 
  )
}
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);


export default App;


