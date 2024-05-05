import React from 'react';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useFetch} from '../utils/hooks';
import Name from '../components/Display/Name';
import {Loader} from '../utils/style/Atoms';
import BodyChart from './BodyChart';
import KpiChart from './KpiChart';
import ObjectifChart from './ObjectifChart';
import RadarChart from './RadarChart';
import Cards from './Cards'
const isLoading = false;

function User () {
  const [myName, setMyName] = useState ({});
  const {data, isLoading, error} = useFetch (`http://localhost:3000/user/12`);
 
  useEffect (



    () => {
      setMyName (data);
      console.log (myName);
      // console.log(myName[0])
    },
    [data, myName]
  );


  if (error) {
    return <span>Il y a un problème</span>;
  }

  return (
    <div className="outletProfil">
      {isLoading
        ? <div className="outletProfil__loader">
            <Loader />
          </div>
        : <div className="outletProfil__line">
             <div className="outletProfil__line__header">
                  <div className="outletProfil__line__header__welcome">
                    <Name todo={data} />
                  </div>
                  <div className="outletProfil__line__header__message">
                    <p> Félicitation ! Vous avez explosé vos objectifs hier</p>
                  </div>
              </div>

              <div className="outletProfil__line__others">
                <div className="outletProfil__line__others__left">
                  <div className="outletProfil__line__others__left__body">
                    <div className="outletProfil__line__others__left__body__title">
                      <div className="outletProfil__line__others__left__body__title__firstdiv">
                        <p>Activité quotidienne</p>
                      </div>
                      <div className="outletProfil__line__others__left__body__title__seconddiv">
                        <li>Poids (kg)</li>
                        <li>Calories brulées (kCal)</li>
                      </div>
                    </div>
                    <div className="outletProfil__line__others__left__chart">
                      <BodyChart />
                    </div>
                  </div>
                  <div className="outletProfil__line__others__left__bottom">
                      <div className="outletProfil__line__others__left__bottom__div">
                        <p>Durée moyenne des sessions</p>
                        <div className="outletProfil__line__others__left__bottom__div__background">
                          <ObjectifChart />
                        </div>
                      </div>
                      <div className="outletProfil__line__others__left__bottom__div">
                        <RadarChart />
                      </div>
                      <div className="outletProfil__line__others__left__bottom__div">
                        <p>Score</p>
                        <div className="outletProfil__line__others__left__bottom__div__background">
                          <KpiChart />
                        </div>
                      </div>
                  </div>
                </div>
                <div className="outletProfil__line__others__rigth">
                   <Cards className="outletProfil__line__others__rigth__card"/>
                </div>
               
              </div>
          </div>
          }

    </div>
  );
}

export default User;
