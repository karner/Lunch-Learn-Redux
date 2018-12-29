import { create } from "apisauce";

const BASE_URL = "https://www.geo-wiki.org/Application/api/";

// define the api
const GeoWikiAPI = create({
    baseURL: BASE_URL,
    headers: { Accept: "application/json" },
});

export default GeoWikiAPI;
