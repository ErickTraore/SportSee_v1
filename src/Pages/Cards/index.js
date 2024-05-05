import React from "react"
import LayoutCard from "../../Pages/LayoutCard"

import { useFetch } from "../../utils/hooks";
import { Loader } from '../../utils/style/Atoms'

const isLoading = false




export default function  Cards() {
    const { data, isLoading, error } = useFetch(`http://localhost:3000/user/12/`)
    console.log(data)

    if (error) {
     return <span>Il y a un problème</span>
     }
     return <div>
     {  isLoading ? (
         <Loader />
        ) : (<LayoutCard props = {data} />
        )
      }

  </div>;
}