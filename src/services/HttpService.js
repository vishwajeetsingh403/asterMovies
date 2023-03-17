import axios from 'axios';
import { API_KEY, LANGUAGE } from '../constants/apiConstants';

const getUrlWithQueryParams = (url, params) => {
    let MovieUrl;
    if (params.query){
       MovieUrl = `${url}?api_key=${API_KEY}&language=${LANGUAGE}&${params}`;
    }
    MovieUrl = `${url}?api_key=${API_KEY}&language=${LANGUAGE}&${params.page}`;

    return MovieUrl;
  }

class HttpService {
    static getRequest({ url, params }) {
        const requestUrl = getUrlWithQueryParams(url, params);
        const options = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          params,
          responseType: "json",
          credentials: "include"
        };
        return axios.get(requestUrl, options);
      }
};

export default HttpService;