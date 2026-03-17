
let sitesCache = null;

async function getSites() {

  if (!sitesCache) {
    const response = await fetch("/data/sites.json");
    const data = await response.json();

    sitesCache = data.sites;
  }

  return sitesCache;
}

async function getSiteById(id) {
  const sites = await getSites();
  const site = sites.find(site => site.id === id);

  return site;
}

async function searchSites(searchString) {
  const sites = await getSites();
  const query = searchString.toLowerCase();
  const match = sites.filter(site =>
    site.name.es.toLowerCase().includes(query) ||
    site.name.en.toLowerCase().includes(query));

  if (!query) {
    return sites;
  }
  return match;

}

export const sitesService = {
  getSites,
  getSiteById,
  searchSites
}