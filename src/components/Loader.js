import styled, { keyframes } from 'styled-components'


const Rotate = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`;

const LoaderContainer = styled.div`
    width: 100%;
    height: 100vh;
    margin:auto;
    opacity: .7;
    overflow-y: hidden;
`;

const Circle = styled.div`
    margin: auto;
    width: 40px;
    height: 40px;
    background: inherit;
    border: 4px solid #7026ee;
    border-bottom: 4px solid #fff;
    position: absolute;
    top: 50%;
    left: 45%;
    border-radius: 50%;
    animation: ${Rotate} 1s linear infinite;
`;

const EmptyTitle = styled.div`
    color: #fff;
    font-size: 1rem;
    position: absolute;
    top: 44%;
    left: 44%;

    @media (max-width: 768px) {
        top: 44%;
        left: 43.5%;
      }
  
      @media (max-width: 425px) {
        top: 40%;
        left: 42%;
      }
`;


const Loader = () => (
    <LoaderContainer className="container">
    <EmptyTitle>Loading...</EmptyTitle>
        <Circle className="circle">
        </Circle>
    </LoaderContainer>
    );

export default Loader;