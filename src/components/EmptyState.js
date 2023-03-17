import styled from 'styled-components';

const EmptyContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 72vh;
    color:  #fff;
    font-size: 2rem;
`;


const EmptyState = () => (
    <EmptyContainer>
        Oops Nothing Here...
    </EmptyContainer>
);

export default EmptyState;