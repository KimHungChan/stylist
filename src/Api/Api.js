const axios = require("axios").default;

const getPageData = () => {
  return axios
    .get("https://www.mocky.io/v2/5dece3d333000052002b9037")
    .then((response) => response.data);
};

export { getPageData };
