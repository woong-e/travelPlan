import axios, {context} from '../../settings/serviceConfig';

import {fetchMockData} from './serviceApi.spec';

const fetch = (id) => {
  fetchMockData();
  return axios.get(`${context}/${id}`);
};

export {
  fetch
}