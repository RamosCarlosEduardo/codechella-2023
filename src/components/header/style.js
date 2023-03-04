import styled from 'styled-components'

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-between;
    padding: 2rem 1.5rem;
    background-color: ${({theme}) => theme.primaryDark};
    
    @media screen and (min-width: 768px) {
        flex-direction: column;
        gap: 32px;
    }
    @media screen and (min-width: 1440px) {
        padding: 32px 120px;
        flex-direction: row;
    }
`

export const Button = styled.button`
    
    background: url(/public/img/menu.png);
    width: 32px;
    height: 40px;
    background-repeat: no-repeat;
    background-position: center;

    @media screen and (min-width: 768px) {
        display: none
    }
`

export const Logo = styled.img`
    width: 233px;
`

export const Navbar = styled.nav`
    display: none;    

    @media screen and (min-width: 768px) {
            display: block;
    }
    
    ul {
        display: flex;
        list-style: none;
        gap: 1rem;
    }
    a {
        color: white;
        text-decoration: none;
        font-size: 20px;
        font-weight: 700;
    }
    
`