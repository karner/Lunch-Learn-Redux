const getLegends = async (email, passwordMD5) => {
    const param = {
      email,
      passwordMD5,
      loaditems: true
    };
    let legends = null;
    
    const action = (email == null || passwordMD5 == null) ? "getPublicLegends" : "getAvailableLegends";
 
    const response = await fetch(`https://www.geo-wiki.org/Application/api/Legend/${action}`, {
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
        legends = null;
      }
      legends = responseJson;
    } catch (error) {
    }
  
    return legends;
  };
  
  export {getLegends};
  export default getLegends;
  