import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios";
 function defaultHeaders() {
  const defaultHeaders = {
    Accept: "application/json",
  };
  return defaultHeaders;
  // return _.pickBy(defaultHeaders, _.identity)
}


const musicAPI: AxiosInstance = axios.create({
  // baseURL: "https://blogger-8e4f.onrender.com",
  baseURL: "http://localhost:5005",
});
musicAPI.interceptors.request.use(  function (config: AxiosRequestConfig) {
  config.headers =  defaultHeaders();
  return config;
});

export { musicAPI };