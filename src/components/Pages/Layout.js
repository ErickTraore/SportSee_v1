import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; 
import Logosport from './Logosport';


const Layout = () => {
  return (
    <div className="Layout">
      <div className="Layout__container">
          <div className="Layout__container__horizontal">
              <div className="Layout__container__horizontal__nav">
                <Logosport />
              </div>
          </div>
          <div className="Layout__container__vertical">
                <div className="Layout__container__vertical__nav">
                  row vertical nav1 nav nav2 nav3 nav4
                </div>
                <div className="Layout__container__vertical__body">
                < Outlet />
                </div>
              </div>
      </div>
  </div>
  );
}

export default Layout;