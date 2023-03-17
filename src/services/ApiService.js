import { BASE_URL, ENDPOINTS } from "../constants/apiConstants";
import HttpService from "./HttpService";

class ApiService {
    static getPopularMovies(params){
        const endpoint = ENDPOINTS.movies.popularMovies();
        const url = `${BASE_URL}/${endpoint}`;
        return HttpService.getRequest({ url, params })
    }

    static getSearchedMovies(params){
        const endpoint = ENDPOINTS.movies.searchedMovies();
        const url = `${BASE_URL}/${endpoint}`;
        return HttpService.getRequest({ url, params })
    }
};

export default ApiService;