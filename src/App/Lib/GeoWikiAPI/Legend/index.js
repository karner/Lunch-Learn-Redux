import GeoWikiAPI from "..";

const CONTROLLER_PATH = "legend/";

const GetPublicLegends = () => {
    return GeoWikiAPI.get(CONTROLLER_PATH + "getPublicLegends/true")
        .then((response) => {
            return response.data;
        });
};

export default GetPublicLegends;