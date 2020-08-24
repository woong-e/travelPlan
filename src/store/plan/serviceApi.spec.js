import MockAdapter from "axios-mock-adapter";
import axios, {context} from '../../settings/serviceConfig';

import data from '../../mock/fetchData.json';

const mock = new MockAdapter(axios);

const fetchMockData = () => mock.onGet(`${context}/mungyeong`).reply(200, data);

export {
  fetchMockData,
}


