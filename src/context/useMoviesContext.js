import { createContext, useEffect, useState } from "react";
import ApiService from "../services/ApiService";

export const MovieContext = createContext({});

const UseMoviesContext = ({children}) => {

    const [movieDetails, setMovieDetails] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const params = {
            page
        }
            setIsLoading(true);
            setTimeout(() => {
                ApiService.getPopularMovies(params).then(({data: {results}}) => {
                    setMovieDetails(prev => [...prev, results]);
                    setIsLoading(false);
                }).catch(err => err);
            }, 500);
    }, [page]);

    const handleInputSearch = (input) => {
        setIsLoading(true);
        const params = {
            query: input,
            page
        }
            ApiService.getSearchedMovies(params).then(({data: {results}}) => {
                setMovieDetails(results);
                setIsLoading(false);
            }).catch(err => err);
    }

    return (
        <MovieContext.Provider value={{
            movieDetails,
            handleInputSearch,
            setPage,
            setMovieDetails,
            isLoading,
            page
        }}>
            {children}
        </MovieContext.Provider>
    );
}

export default UseMoviesContext;