import styled from 'styled-components';

export const EventContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    padding: 13px;
    box-shadow: 2px 3px 5px rgba(0,0,0,0.1);

    @media (max-width: 600px) {
        flex-direction: column;
        text-align: center;
    }
`
export const ImageWrapper =  styled.div`
    flex: 1;
    margin: 10px;
    border-radius: 30px;
`
export const Info = styled.div`
    flex: 2;
    @media (max-width: 600px) {
        margin-bottom: 25px;
    }
`
export const Schedule = styled.span``
export const Name = styled.h3``