import { useDataContext } from "../hooks/useDataContext"

export default function DataSingle({ data_info }) {
  const { dispatch } = useDataContext()

  const handleClick = async () => {
    const response = await fetch("/api/data/" + data_info._id, {
      method: "DELETE"
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: "DELETE_DATA", payload: json})
    }
  }

  return (
    <tr className="bg-white font-medium text-gray-800">
      <th scope="row" className="px-6 py-4 whitespace-nowrap">
      { data_info.user }
      </th>
      <td className="px-6 py-4">
      { data_info.color }
      </td>
      <td className="px-6 py-4">
      { data_info.flavour }
      </td>
      <td className="px-6 py-4">
        { data_info.eatVeggie ? "Yes" : "No" }
      </td>
      <td className="px-6 py-4 place-items-center">
        <button className="text-red-600 dark:text-red-500 hover:underline" onClick={handleClick}>
          Delete
        </button>
      </td>
    </tr>
  )
}