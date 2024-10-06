import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';

import { params } from './default-params';

export async function queryHttp(query) {
  try {
    const { data } = await axios.get('', {
      params: {
        ...params,
        q: query,
      },
    });
    return data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}
