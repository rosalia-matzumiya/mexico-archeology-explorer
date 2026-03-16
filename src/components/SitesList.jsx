import sites from "../data/sites.json"

function SiteList() {
  return (
    <div>
      <h2>Archeological Sites</h2>


      <ul>
        {sites.map((site) => (
          <li key={site.id}>
            <strong>{site.name}</strong> - {site.region}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SiteList