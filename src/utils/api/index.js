import axios from 'axios';

const base_url = 'https://gorest.co.in/public-api/products';

export const get_Products = async (params) => {
  let config = {
    url: base_url,
    method: 'get',
    params: params,
  };
  try {
    const response = await axios(config);
    const data = response.data;
    return data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.massage);
    } else {
      throw new Error('check internet connection');
    }
  }
};
