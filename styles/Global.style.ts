import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body { 
        background-color: ${({ theme }) => theme.body}; 
        color: ${({ theme }) => theme.text}; 
    }
    button {
        border-radius: 35px;
        border: 1px solid ${({theme}) => theme.text};
        width: 6.5rem;
        height: 2.5rem;
    }
    a {
        text-decoration: none;
    }
    .btn-primary {
        background-color: ${({ theme }: any) => theme.primary}; 
    }
    .btn-secondary {
        background-color: ${({ theme }: any) => theme.primary}; 
    }
    .round {
        border-radius: 32px;
    }
`

export const lightTheme = {
    body: '#fff',
    text: '#121212',
    primary: "#B3BCB6"
}

export const darkTheme = {
    body: '#121212',
    text: '#fff',
    primary: "#1a0749"
}