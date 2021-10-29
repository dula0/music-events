import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding: 0 30px;
    
`
export const Logo =  styled.div`
    color: tomato;
    font-size: 20px;
    text-transform: uppercase;
    @media (max-width: 768px) {
        margin: 20px 0;
    }
`
export const BrandLink = styled.a`
    margin-right: 20px;
    color: tomato;
    cursor: pointer;
    ::hover {
        color: thistle;
    }
    @media (max-width: 768px) {
        margin-right: 0;
    }
`

export const UL = styled.ul`
 display: flex;
 align-items: center;
 justify-content: center;
 list-style: none;
@media (max-width: 768px) {
    margin: 23px 0;
    flex-direction: column;
    text-align: center;
    }
`