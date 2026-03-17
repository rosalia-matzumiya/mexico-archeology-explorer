import { useEffect } from "react"
import { useState } from "react"
import { sitesService } from "../services/sitesService"
import SiteCard from "../components/SiteCard"

function HomePage() {
  const [sites, setSites] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    async function loadSites() {
      try {
        setLoading(true)
        const data = await sitesService.getSites()
        setSites(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    loadSites()
  }, [])
  const lang = "es"
  if (loading) {
    return <p> Loading...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }
  return (

    <div>
      <h1>Home</h1>
      <ul>
        {sites.map(site =>
          <SiteCard key={site.id} site={site} lang={lang} />
        )}
      </ul>
    </div>
  )
}

export default HomePage