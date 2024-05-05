import ChartProfil from "../components/Display/ChartProfil";
import { useFetch } from "../utils/hooks";
import { Loader } from '../utils/style/Atoms'
const isLoading = false

export default function BodyChart() {
  const { data, isLoading, error } = useFetch(`http://localhost:3000/user/12/activity`)

 if (error) {
  return <span>Il y a un problème</span>
}
  return <div>
          {  isLoading ? (
              <Loader />
            ) : (<>
                  <ChartProfil todo = {data} />
                  </>
           )}
      
          </div>;
}