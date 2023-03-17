import styled from 'styled-components';
import CONSTANTS from '../constants/appConstants';

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-size: 0.8rem;
    border-radius: 8px;
    box-shadow: 0 3px 20px #fff;
    background: #fff;
    padding: 1rem;
    gap: .6rem;
`;

const CardTitle = styled.div`
    font-size: 1rem;
    font-weight: 600;
`;

const CardImage = styled.img`
    object-fit: contain;
    width: 100%;
    border-radius-top-left: 8px;
    border-radius-top-right: 8px;
`;

const CardReleaseDate = styled.div`
    font-weight: 500;
`;

const CardOverview = styled.div`
    width: 100%;
    margin: auto;
`;

const Cards = ({moviesData}) => {
    return (
      <CardContainer>
        <CardImage src={ moviesData.poster_path ? `${CONSTANTS.IMAGE_BASE}/${moviesData.poster_path}` : CONSTANTS.DEFAULT_IMAGE }/>
        <CardTitle>{moviesData.title}</CardTitle>
        <CardReleaseDate>Released On: {moviesData.release_date}</CardReleaseDate>
        <CardOverview>{moviesData.overview.split(".")[0].slice(0, 100)}...</CardOverview>
      </CardContainer>
    );
};

export default Cards;