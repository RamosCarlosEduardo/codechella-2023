import styled from 'styled-components'

export const StyledFooter = styled.footer`
    text-align: center;
    background: ${ ({theme}) => theme.secondary };
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
    gap: 32px;
    min-height: 312px;
    
    br {
        display: none;
    }

    img {
        filter: invert(0.8)
    }

    @media screen and (min-width: 768px) {
        padding-inline: 120px;
    }
    
    @media screen and (min-width: 1440px) {
        text-align: start;
        flex-direction: row;
        justify-content: space-between;

        br {
            display: block;
        }
    }
`

export const SocialMedia = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 500;
    font-size: 20px;
    line-height: 40px;
    

    div img {
        width: 32px;
        height: 32px;
        filter: brightness(0.7);
    }

    @media screen and (min-width: 768px) {
        flex-direction: row;
        gap: 1rem;
    }

`

export const Container = styled.div`
    font-weight: 500;
    font-size: 20px;
    line-height: 40px;
`