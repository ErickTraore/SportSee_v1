import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { useFetch } from '../utils/hooks'
import Name from '../components/Display/Name'
import { Loader } from '../utils/style/Atoms'
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
    <div>
    {  isLoading ? (
        <Loader />
      ) : (
        <h1><Name  todo = {data} /></h1>
      )}
    </div>
    )

  }
  
  export default User