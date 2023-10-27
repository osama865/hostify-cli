const axios = require("axios");

async function inspect(container, options) {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `http://localhost:3000/containers/${container}/inspect`,
    headers: {
      Authorization: `Bearer ${process.env.JWT}`,
    },
  };
  try {
    const response = await axios.request(config);
    console.table(JSON.stringify(response.data));
  } catch (error) {
    console.log(error);
  }
}

module.exports = { inspect };
