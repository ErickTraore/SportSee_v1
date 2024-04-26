import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; 
import Logosport from './Logosport';
import Boutonhorizontale from './Boutonhorizontale';
import Naving from "../components/Naving/index";
import Boutonverticale from './Boutonverticale';
import icon_1 from '../asset/images/naving/icon_1.svg'
import icon_2 from '../asset/images/naving/icon_2.svg'
import icon_3 from '../asset/images/naving/icon_3.svg'
import icon_4 from '../asset/images/naving/icon_4.svg'


const Layout = () => {
  return (
    <div className="Layout">
      <div className="Layout__container">
          <div className="Layout__container__horizontale">
              <div className="Layout__container__horizontale__logo">
                <Logosport />
              </div>
              <div className="Layout__container__horizontale__nav">
                <Naving />
              </div>
              
          </div>
          <div className="Layout__container__verticale">
              <div className="Layout__container__verticale__nav">
                <div className="Layout__container__verticale__nav__icon">
                      <span>
                        <Boutonverticale  content={icon_1}/>
                      </span>
                      <span>
                        <Boutonverticale  content={icon_2}/>
                      </span>
                      <span>
                        <Boutonverticale  content={icon_3}/>
                      </span>
                      <span>
                        <Boutonverticale  content={icon_4}/>
                      </span>
                </div>
                <div className="Layout__container__verticale__nav__texte">
                  <h4>
                    Copiryght, SportSee 2020
                  </h4>
                </div>
              </div>
              <div className="Layout__container__verticale__body">
                  <Outlet />
              </div>
          </div>
      </div>
  </div>
  );
}

export default Layout;