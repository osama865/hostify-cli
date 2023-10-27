const axios = require("axios");
const changes = async () => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "http://localhost:3000/containers/cowsay/changes",
    headers: {},
  };
  try {
    const response = await axios.request(config);
    console.log(JSON.stringify(response.data));
  } catch (error) {
    console.log(error);
  }
};
module.exports = { changes };
