const axios = require("axios");
const processes = async () => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "http://localhost:3000/containers/mongodb/processes",
    headers: {},
  };

  try {
    try {
      const response = await axios.request(config);
      console.log(JSON.stringify(response.data));
    } catch (error) {
      console.log(error);
    }
  } catch (error) {}
};
module.exports = { processes };
