const login = async (email, passwordMD5) => {
  const param = {
    username: email,
    passwordMD5,
  };

  let userInformation = null;

  const response = await fetch("https://www.geo-wiki.org/Application/api/User/checkCredentials", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "parameter=" + JSON.stringify(param),
  });

  try {
    console.log("Got response");
    const responseJson = await response.json();
    console.log("Got response json");
    if (responseJson.userID === null) {
      console.log("Wrong login data! Please try again...");
      userInformation = null;
    } else {
    userInformation = responseJson;
    }
  } catch (error) {
    console.error(`Error is : ${error}`);
  }

  return userInformation;
};

export {login};
export default login;
