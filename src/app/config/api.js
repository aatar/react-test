import { create } from 'apisauce';

import { NETWORK_ERROR, ERROR_CODE } from './constants';

const api = create({
  baseURL: process.env.API_BASE_URL,
  // baseURL: 'https://ma-express-v2.herokuapp.com',
  timeout: 15000
});

export const apiSetup = () => {
  api.addMonitor(response => {
    if (response.status === ERROR_CODE) {
      /* eslint-disable */
      console.warn('Unhandled session expiration');
      /* eslint-enable */
    }
  });

  api.addMonitor(response => {
    if (response.problem === NETWORK_ERROR) {
      /* eslint-disable */
      console.warn('Unhandled request without connection');
      /* eslint-enable */
    }
  });
};

export default api;
