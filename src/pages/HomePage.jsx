import { useEffect } from "react"
import { useState } from "react"
import { sitesService } from "../services/sitesService"

function HomePage() {
  const [sites, setSites] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {

    async function loadSites() {
      try {

        const data = await sitesService.getSites()
        setSites(data)
      } catch (err) {
        setError(err.message)
      }
    }
    loadSites()
  }, [])
  const lang = "es"
  return (

    <div>
      <h1>Home</h1>
      {error && <p>Error: {error}</p>}
      <ul>
        {sites.map(site =>
          <li key={site.id}>
            {site.name?.[lang]} - {site.location?.[lang]}
          </li>)}
      </ul>
    </div>
  )
}

export default HomePage