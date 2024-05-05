import React from "react";
import FooterRadar from "../components/Display/FooterRadar";
import { useFetch } from "../utils/hooks";
import { Loader } from '../utils/style/Atoms'
const isLoading = false



export default function RadarChart() {
  const { data, isLoading, error } = useFetch(`http://localhost:3000/user/12/performance`)

 if (error) {
  return <span>Il y a un problème</span>
}
  return <div>
          {  isLoading ? (
              <Loader />
            ) : (<>
                  <FooterRadar todo = {data} />
                  </>
                )}
      
          </div>;
}