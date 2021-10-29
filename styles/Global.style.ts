import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body { 
        background-color: ${({ theme }) => theme.body}; 
        color: ${({ theme }) => theme.text}; 
    }
`

export const lightTheme = {
    body: '#fff',
    text: '#121212',
    primary: "#53c17"
}

export const darkTheme = {
    body: '#121212',
    text: '#fff',
    primary: "#d18551"
}