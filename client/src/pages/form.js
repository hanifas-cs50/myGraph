import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDataContext } from "../hooks/useDataContext";

export default function Form() {
  const { dispatch } = useDataContext
  const navigate = useNavigate();
  const [colour, setColour] = useState("Red")
  const [flavour, setFlavour] = useState("Sweet")
  const [eatVeggie, setEatVeggie] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const load = { user: "anon", color: colour, flavour, eatVeggie }

    const response = await fetch("/api/data", {
      method: "POST",
      body: JSON.stringify(load),
      headers: {
        "Content-Type": "application/json"
      }
    })

    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setColour("Red")
      setFlavour("Sweet")
      setEatVeggie(false)
      setError(null)
      dispatch({type: "CREATE_DATA", payload: json})
      navigate("/test", { replace: true })
    }
  }

  return (
    <section className="h-full w-full font-medium">
      <h2 className="mt-8 mb-2 text-[56px] tracking-tight font-extrabold text-center text-nepal-900">
        Add data
      </h2>
      <p className="mb-8 text-center text-nepal-700 sm:text-xl">
        Fill this form and you can see how significant your voice is
      </p>

      <form className="max-w-lg mx-auto space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="colours" className="block mb-2 text-md text-nepal-900">
            Select your favourite colour
          </label>
          <div className="flex relative">
            <select id="colours"
            onChange={(e) => setColour(e.target.value)}
            value={colour}
            className="appearance-none block w-full p-2.5 bg-tower-nepal-100 outline-none border-4 border-nepal-300 text-nepal-900 text-md rounded-lg focus:ring-tower-gray-500 focus:border-tower-gray-500">
              <option>Red</option>
              <option>Green</option>
              <option>Blue</option>
              <option>Yellow</option>
            </select>
            <svg className="absolute pointer-events-none right-4 w-4 h-full text-nepal-800" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m19 9-7 7-7-7" />
            </svg>
          </div>
        </div>
        
        <div>
          <label htmlFor="flavours" className="block mb-2 text-md text-nepal-900">
            Select your favourite flavour
          </label>
          <div className="flex relative">
            <select id="flavours"
            onChange={(e) => setFlavour(e.target.value)}
            value={flavour}
            className="appearance-none block w-full p-2.5 bg-tower-nepal-100 outline-none border-4 border-nepal-300 text-nepal-900 text-md rounded-lg focus:ring-tower-gray-500 focus:border-tower-gray-500">
              <option>Sweet</option>
              <option>Salty</option>
              <option>Sour</option>
              <option>Bitter</option>
              <option>Umami (savoury)</option>
            </select>
            <svg className="absolute pointer-events-none right-4 w-4 h-full text-nepal-800" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m19 9-7 7-7-7" />
            </svg>
          </div>
        </div>

        <div>
          <label htmlFor="eatVeggie" className="block mb-2 text-md text-nepal-900">
            Do you eat your vegetables?
          </label>
          <div className="flex relative">
            <select id="eatVeggie"
            onChange={(e) => setEatVeggie(e.target.value)}
            value={eatVeggie}
            className="appearance-none block w-full p-2.5 bg-tower-nepal-100 outline-none border-4 border-nepal-300 text-nepal-900 text-md rounded-lg focus:ring-tower-gray-500 focus:border-tower-gray-500">
              <option value={false}>No</option>
              <option value={true}>Yes</option>
            </select>
            <svg className="absolute pointer-events-none right-4 w-4 h-full text-nepal-800" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m19 9-7 7-7-7" />
            </svg>
          </div>
        </div>
        <button type="submit" className="text-white bg-tower-gray-700 hover:bg-tower-gray-800 focus:ring-4 focus:ring-tower-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-tower-gray-600 dark:hover:bg-tower-gray-700 focus:outline-none dark:focus:ring-tower-gray-800">
          Submit
        </button>
        {error && <div className="w-full p-4 bg-red-500 text-white">{error}</div>}
      </form>
    </section>
  )
}