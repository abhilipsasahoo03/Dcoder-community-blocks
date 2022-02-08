const axios = require("axios");
const main = async(inputs, auths, context) => {
  console.log("Fetching data");
  let { domain, token } = inputs;
  const {data} = await axios.get(
    `https://${domain}/api/v1/conversations`,
    {
      headers: { 'Authorization': `Bearer ${token}` }
    }
  );
  return data;
}

module.exports.main = main