import GeoWikiAPI from "..";

const CONTROLLER_PATH = "dev/";

const GetCurrentTime = (): Promise<string> => {
    return GeoWikiAPI.get<any>(CONTROLLER_PATH + "getCurrentTime")
    .then((response) => {
        return response.data;
    });
};

export default GetCurrentTime;
