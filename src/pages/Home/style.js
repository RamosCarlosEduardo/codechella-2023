import styled from "styled-components";
import { Variables } from "assets/styles/Variables";

export const Main = styled.main`
  background: ${({ theme }) => theme.gradient};
  text-align: center;
`;

export const Banner = styled.div`
  width: 100%;
  height: 270px;
  background-image: url(/img/banner-sm.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;

  @media screen and (min-width: 768px) {
    background-image: url(/img/banner-md.png);
    height: 384px;
  }
  @media screen and (min-width: 1440px) {
    background-image: url(/img/banner-lg.png);
    height: 487px;
  }
`;

export const Informations = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-block: 32px;
  padding-inline: 24px;
  gap: 32px;

  h3 {
    font-size: 2rem;
    font-family: ${Variables.fontTitle};
  }

  @media screen and (min-width: 768px) {
    padding-inline: 60px;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;

export const PeopleBanner = styled.div`
  height: 381px;
  background-image: url(/img/people-sm.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  @media screen and (min-width: 768px) {
    background-image: url(/img/people-md.png);
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const Paragraph = styled.p`
  font-size: 20px;
`;

export const CtaButton = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 16px;
  cursor: pointer;

  font-weight: 700;
  color: white;

  width: 312px;
  height: 56px;

  background: ${({ theme }) => theme.primaryDark};
  box-shadow: 4px 4px 0px #444444;
  border-radius: 16px;

  img {
    height: 20px;
    width: 30px;
  }
`;

export const LineUp = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    color: #444444;
    h2 {
        font-weight: 400;
        font-size: 48px;
        line-height: 62px;
        font-family: ${ Variables.fontTitle };
        padding: 32px;
    }

    @media screen and (min-width: 768px) {
      padding: 0 120px;
    }
`

export const DayContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 32px;
  width: 100%;

  
    
`

export const Separator = styled.div`
  height: 3px;
  flex-grow: 1;
  background-color: orange;
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }

`

export const DayText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #DF9010;
    width: 289px;
    height: 74px;
    font-weight: 400;
    font-size: 32px;
    line-height: 42px;
    color: white;
    font-family: ${ Variables.fontTitle };
`



export const BandList = styled.ul`
    display: flex;
    flex-direction: column;

    padding: 48px 24px;
    gap: 32px;

    

    li {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 32px;
        white-space: nowrap;
    }

  .band-n1 {
    font-weight: 800;
    font-size: 48px;
    line-height: 56px;
  }

  .band-n2 {
    font-weight: 700;
    font-size: 40px;
    line-height: 47px;
  }

  .band-n3 {
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
  }
  .band-n4 {
    font-weight: 500;
    font-size: 32px;
    line-height: 38px;
  }

  @media screen and (min-width: 768px) {
    li {
      flex-direction: row;
    }
  }
  
`;

export const BannerPrefooter = styled.div`
  width: 100%;
  height: 338px;
  background-image: url(/img/banner-prefooter-sm.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;

  @media screen and (min-width: 768px) {
    background-image: url(/img/banner-prefooter-md.png);
    height: 384px;
  }
  @media screen and (min-width: 1440px) {
    background-image: url(/img/banner-prefooter-lg.png);
    height: 487px;
  }
`