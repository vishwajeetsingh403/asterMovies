import SearchComponent from "../../components/SearchComponent";
import ResultsContainer from "./partials/ResultsContainer";
import styled from 'styled-components';
import { useContext, useEffect } from "react";
import { MovieContext } from "../../context/useMoviesContext";


const HomeWrapper = styled.div`
    background: #000;
    width: 100%;
    margin: auto;
    text-align: center;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    gap: 2rem;
    overflow: hidden;
`;

const Logo = styled.div`
display: inline-block;
padding: 0.5rem 0.8rem;
background: transparent
  linear-gradient(180deg, rgba(235, 26, 48, 1) 0%, rgba(234, 25, 115, 1) 100%)
  0% 0% no-repeat padding-box;
border-radius: 8px;
font-size: 1rem;
color: #fff;
flex-grow: 0;
z-index: 1;
width: 10rem;
margin: 2rem auto;
padding: 1rem;
font-weight: bold;
-webkit-animation: glowing 1300ms infinite;
-moz-animation: glowing 1300ms infinite;
-o-animation: glowing 1300ms infinite;
animation: glowing 1300ms infinite;

@-webkit-keyframes glowing {
  0% {
    background: rgba(235, 26, 48, 0.7);
  }
  50% {
    background: rgba(234, 25, 115, 1);
  }
  100% {
    background: rgba(235, 26, 48, 0.7);
  }
}
@keyframes glowing {
  0% {
    background: rgba(235, 26, 48, 0.7);
  }
  50% {
    background: rgba(234, 25, 115, 1);
  }
  100% {
    background: rgba(235, 26, 48, 0.7);
  }
}
`;

const HomeContainer = () => {

    const {setPage, setScroll} = useContext(MovieContext);

    useEffect(() => {
        window.onscroll = () => {
            if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
                setPage(prev => prev + 1);
            }
        }
    }, [setPage, setScroll]);

    return (
        <HomeWrapper>
            <Logo>Aster Movies</Logo>
            <SearchComponent /> 
            <ResultsContainer />
        </HomeWrapper>
    );
};

export default HomeContainer;