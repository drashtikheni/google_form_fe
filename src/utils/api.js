import axios from "axios";

export const api = async (method, endpoint, data) => {
  try {
    const url = `${process.env.REACT_APP_API_ENDPOINT}/${endpoint}`;

    const config = {
      method,
      url,
      data,
    };

    const res = await axios(config);
    return res;
  } catch (err) {
    console.log(err);
    return {
      err: err.response?.data,
      status: false,
      statusCode: err.response?.status,
    };
  }
};
