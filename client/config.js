const isDevelopment = (process.env.NODE_ENV === 'development');
const isProduction = (process.env.NODE_ENV === 'production');

const envURL = process.env.REACT_APP_API_URL || '';
const originURL = `${window.location.origin}/api`;

const API_URL = envURL || originURL;

export {
  isDevelopment,
  isProduction,
  API_URL,
};
