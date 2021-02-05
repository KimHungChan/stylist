const axios = require("axios").default;

const getPageData = () => {
  return axios
    .get("http://www.mocky.io/v2/5dece3d333000052002b9037")
    .then((response) => response.data)

    .catch((error) => {
      console.log("Failed to load page data with error: ", error);
    });
};

export { getPageData };
