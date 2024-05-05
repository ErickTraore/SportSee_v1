import React from "react";
import FooterKpi from "../components/Display/FooterKpi";
import { useFetch } from "../utils/hooks";
import { Loader } from '../utils/style/Atoms'
const isLoading = false



export default function KpiChart() {
  const { data, isLoading, error } = useFetch(`http://localhost:3000/user/12`)

 if (error) {
  return <span>Il y a un problème</span>
}
  return <div>
          {  isLoading ? (
              <Loader />
            ) : (<>
                  <FooterKpi todo = {data} />
                  </>
                )}
      
          </div>;
}