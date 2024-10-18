import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';

import { params } from './default-params';

export async function queryHttp(query, page) {
  const { data } = await axios.get('', {
    params: {
      q: query,
      page,
      ...params,
    },
  });
  return data;
}
