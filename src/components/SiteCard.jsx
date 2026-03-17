function SiteCard({ site, lang }) {
  return (
    <li>
      {site.name?.["en"] || "No name"} - {site.location?.[lang] || "No location"}
    </li>
  )

}

export default SiteCard