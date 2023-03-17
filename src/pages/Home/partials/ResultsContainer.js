import { useContext, useEffect, useState } from "react";
import Cards from "../../../components/Cards";
import { MovieContext } from "../../../context/useMoviesContext";
import styled from 'styled-components';
import Loader from "../../../components/Loader";
import EmptyState from "../../../components/EmptyState";

const ResultsWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    gap: 4rem;
`;

const CardsWrapper = styled.div`
    display: flex;
    width: 20%;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;

    @media (max-width: 768px) {
        width: 40%;
      }
  
      @media (max-width: 425px) {
        width: 70%;
      }
`;


const ResultsContainer = () => {
    const {movieDetails, isLoading} = useContext(MovieContext);

    const [moviesData, setMoviesData] = useState([]);

    useEffect(() => {
        const updatedArr = movieDetails.flat();
        setMoviesData(updatedArr);
    }, [movieDetails]);

    return (
        <>
        {isLoading ? 
        <Loader /> : 
            <ResultsWrapper>
            {moviesData.length > 0 ? moviesData.map(res => (
                <CardsWrapper key={res.id}>
                    <Cards moviesData={res}/>
                </CardsWrapper>
            )): 
            <EmptyState />
        }
        </ResultsWrapper>
        }
        </>
    );
};

export default ResultsContainer;