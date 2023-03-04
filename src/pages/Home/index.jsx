import {
    Main,
    Banner,
    Informations,
    PeopleBanner,
    TextContainer,
    Paragraph,
    CtaButton,
    LineUp,
    DayContainer,
    Separator,
    DayText,
    BandList,
    BannerPrefooter
} from './style.js'

export function Home () {

    return (
        <Main>
            <Banner src="/img/banner.png" alt="Banner de bem vindo ao CodeChella" />
            <Informations>
                <PeopleBanner className='Imagem'>

                </PeopleBanner>
                <TextContainer>
                    <h3>&lt; 11 e 12 de Março &gt; <br /> Aluródromo de São Paulo</h3>
                    <Paragraph>
                    Hora de programar nossa memória com novas lembranças! Uma nova experiência sobre música, linguagens e, claro, tecnologia! Somos um festival diverso, com vários artistas e referências. Divirta-se!
                    </Paragraph>
                    <CtaButton>
                        Comprar Ingresso! <img src="/img/ticket.png" alt=""/>
                    </CtaButton>
                </TextContainer>
            </Informations>
            <LineUp>
                <h2>/Line-Up/</h2>

                <DayContainer>
                    <Separator />
                    <DayText>SÁBADO &lt;11/03&gt;</DayText>
                    <Separator />
                </DayContainer>
                <BandList>
                    <li className="band-n1"> 
                        <span>System of a DOM</span>
                    </li>
                    <li className="band-n2">
                        <span> Python Maiden </span>
                        <span> Apollo Client 2001 </span>
                        <span> Bon Java </span>
                        <span> NickCallback </span>
                    </li>
                    <li className="band-n3">
                        <span> Linkin Promises </span>
                        <span> Fullstack Fighters </span>
                        <span> Papa React </span>
                        <span> Angular in Chains </span>
                    </li>
                    
                    <li className="band-n4">
                        <span> Agnostic Front-end </span>
                        <span> SlipkNode </span>
                        <span> Pink Flutter </span>
                        <span> Kiss </span>
                    </li>
                </BandList>
                
                <DayContainer>
                    <Separator />
                    <DayText>DOMINGO &lt;12/03&gt;</DayText>
                    <Separator />
                </DayContainer>
                <BandList>
                    <li className="band-n1"> 
                        <span>Lana Del Ploy</span>
                    </li>
                    <li className="band-n2">
                        <span> Dua Lib </span>
                        <span> The Backnd </span>
                        <span> CSS Styles </span>
                        <span> ArrayAna Grande </span>
                        <span> DJ Query </span>
                    </li>
                    <li className="band-n3">
                        <span> Miley Cypress </span>
                        <span> The Bootstrap Boys </span>
                        <span> Json Derulo </span>
                        <span> CloudPlay </span>
                        <span> Dev Lovato </span>
                    </li>
                    <li className="band-n4">
                        <span> Kylie MiLOG </span>
                        <span> Jenkins Brothers </span>
                        <span> Rubycat Dolls </span>
                    </li>
                </BandList>
            </LineUp>
            <BannerPrefooter />
        </Main>
    )
}
