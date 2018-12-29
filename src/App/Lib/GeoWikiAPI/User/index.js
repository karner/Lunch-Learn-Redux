
const login = async (email, passwordMD5) => {
    const param = {
        username: email,
        passwordMD5,
    };
    const response = await fetch("https://www.geo-wiki.org/Application/api/User/checkCredentials", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: "parameter=" + JSON.stringify(param),
    });
    try {
        const responseJson = await response.json();
        if (responseJson.userID === null) {
            console.log("Wrong login data! Please try again...");
            return null;
        }
        return responseJson;
    } catch (error) {
        console.error(`Error is : ${error}`);
    }
};

export default login;