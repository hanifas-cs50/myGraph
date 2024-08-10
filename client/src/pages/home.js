import { useEffect } from "react"
import { useDataContext } from "../hooks/useDataContext"
import { BarGraph, LineGraph, PieGraph } from "../components/charts"
import DataSingle from "../components/table"

export default function Home() {
  const { graphdata, dispatch } = useDataContext()
  
  useEffect(() => {
    const fetchDatas = async () => {
      const response = await fetch("https://my-graph.vercel.app/api/data/")
      const json = await response.json()
      
      if (response.ok) {
        dispatch({ type:"SET_DATA", payload: json })
      }
    }

    fetchDatas()
  }, [dispatch])
  
  return (
    <section className="h-full w-full">
      <h2 className="mt-8 mb-2 text-[56px] tracking-tight font-extrabold text-center text-nepal-900">
        MyGraph
      </h2>
      <p className="mb-8 mx-4 text-center text-nepal-700 sm:text-xl">
        A portfolio website to demonstrate MERN Stack and Chartjs for charts
      </p>

      <section className="grid grid-rows-3 mx-8 gap-4 md:gap-0
      md:grid-rows-1 md:grid-cols-3 md:mx-auto mb-8 p-8 
      shadow-lg max-w-screen-lg sm:rounded-lg bg-white">
        <div className="h-64">
          {
            graphdata ? <LineGraph chartData={graphdata} /> : null
          }
        </div>
        <div className="h-64">
          {
            graphdata ? <PieGraph chartData={graphdata} /> : null
          }
        </div>
        <div className="h-64">
          {
            graphdata ? <BarGraph chartData={graphdata} /> : null
          }
        </div>
      </section>
      
      <p className="mb-8 text-center text-nepal-700 sm:text-xl font-bold">
        Data in table form
      </p>

      <div className="mx-auto shadow-lg sm:w-max relative overflow-x-auto sm:rounded-lg">
        <table className="text-sm text-center text-gray-900 bg-gray-300">
          <thead className="text-md uppercase">
            <tr>
              <th scope="col" className="px-6 py-3">
                Username
              </th>
              <th scope="col" className="px-6 py-3">
                Fav Colour
              </th>
              <th scope="col" className="px-6 py-3">
                Fav Flavour
              </th>
              <th scope="col" className="px-6 py-3">
                Eat Veggie ?
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {
              graphdata ? graphdata.map(singleData => {
                return <DataSingle key={ singleData._id } data_info={ singleData } />
              }) : null
            }
          </tbody>
        </table>
      </div>
    </section>
  )
}
