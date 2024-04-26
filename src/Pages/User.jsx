import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { useFetch } from '../utils/hooks'
import Name from '../components/Display/Name'
import { Loader } from '../utils/style/Atoms'
import BodyChart from './BodyChart'
import FooterKpi from '../components/Display/FooterKpi'
import FooterObjectif from '../components/Display/FooterObjectif'
import FooterRadar from '../components/Display/FooterRadar'

const isLoading = false

function User()  {
  const [myName, setMyName]= useState({})
  const { data, isLoading, error } = useFetch(`http://localhost:3000/user/12`)
 
  
  useEffect(() => {
     setMyName(data)
    console.log(myName); 
    // console.log(myName[0])

  }, [data, myName])
  // console.log(myName)

  // const { idUser } = useParams()
  // const idUserInt  = parseInt(idUser)
  // console.log(idUserInt);
    if (error) {
      return <span>Il y a un problème</span>
    }

    return (
    <div className="dashboard">
      {  isLoading ? (
          <Loader />
        ) : (
      <div className="dashboard__graph">
          <div className="dashboard__graph__header">
                  <div className="dashboard__graph__header__welcome">
                    <Name  todo = {data} />
                  </div>  
                  <div className="dashboard__graph__header__message">
                  <p> Félicitation ! Vous avez explosé vos objectifs hier</p>

                  </div>
          </div>
          <div className="dashboard__graph__body">
                  <div className="dashboard__graph__body__title">
                    <p>Activité quotidienne</p>
                    <p>Poids</p>
                    <p>ACalories</p>
                  </div>
                  <div className="dashboard__graph__body__chart">
                    <BodyChart />
                  </div>
          </div>
          <div className="dashboard__graph__footer">
                <div className="dashboard__graph__footer__objectif">
                    <FooterObjectif />
                </div> 
                <div className="dashboard__graph__footer__radar">
                      <FooterRadar />
                </div>
                <div className="dashboard__graph__footer__kpi">
                      <FooterKpi />
                </div>
          </div> 
          <div className="dashboard__graph__section">
                <div className="dashboard__graph__section__calories">
                    <p>Je suis header</p>
                </div> 
                <div className="dashboard__graph__footer__proteine">
                    <p>Je suis header</p>
                </div>
                <div className="dashboard__graph__footer__glucide">
                    <p>Je suis header</p>
                </div>
                <div className="dashboard__graph__footer__lipide">
                    <p>Je suis header</p>
                </div>
          </div> 
        </div>
           )
        }
      </div>
    )

  }
  
  export default User