import GeoWikiAPI from "..";

const CONTROLLER_PATH = "dev/";

const GetCurrentTime = () => {
    return GeoWikiAPI.get(CONTROLLER_PATH + "getCurrentTime")
    .then((response) => {
        return response.data;
    });
};

export default GetCurrentTime;
