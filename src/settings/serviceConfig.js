import axio from 'axios';

/**
 * Axios Global Configuration Setting
 */
const axiosInstance = axio.create({
  baseURL: process.env.REACT_APP_API_HOST,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // console.log('[intercept req]', config);
    // store.dispatch('showLoading');
    return config;
  },
  (error) => {
    // console.log('[intercept req error]', error);
    // store.dispatch('hideLoading);
    return Promise.reject(error);
  },
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // console.log('[intercept res]', response);
    // store.dispatch('hideLoading);
    return response;
  },
  (error) => {
    // console.log('[intercept req error]', error);
    // store.dispatch('hideLoading);
    return Promise.reject(error);
  },
);

const context = 'plan';

export default axiosInstance;
export {
  context,
}