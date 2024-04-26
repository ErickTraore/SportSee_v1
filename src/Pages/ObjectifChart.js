import React from "react";import FooterObjectif from "../components/Display/FooterObjectif";
import { useFetch } from "../utils/hooks";
import { Loader } from '../utils/style/Atoms'
const isLoading = false

export default function ObjectifChart() {
  const { data, isLoading, error } = useFetch(`http://localhost:3000/user/12/average-sessions`)

 if (error) {
  return <span>Il y a un problème</span>
}
  return <div>
          {  isLoading ? (
              <Loader />
            ) : (<>
                  <FooterObjectif todo = {data} />
                  </>
                )}
      
          </div>;
}