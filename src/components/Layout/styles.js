import styled from 'styled-components'

export const Global = styled.div`
    font-family: 'Roboto', sans-serif,Parisienne;
    ${({ lang }) => lang === 'ar' && `
        font-family: 'Cairo', sans-serif;    
    `}
`
