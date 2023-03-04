import {
    StyledFooter,
    Container,
    SocialMedia
} from './style.js'

export function Footer () {

    return (
        <StyledFooter>
            <Container>
                <img src="/img/logo.png" alt="" />
                <SocialMedia>
                    <span>Acesse nossas redes:</span>
                    <div>
                        <img src="/img/socialmedia-1.png" alt="fotinha" />
                        <img src="/img/socialmedia-2.png" alt="fotinha" />
                        <img src="/img/socialmedia-3.png" alt="fotinha" />
                        <img src="/img/socialmedia-4.png" alt="fotinha" />
                    </div>
                </SocialMedia>
            </Container>
            <Container>
                <span>Desenvolvido por Alura. <br /> Projeto fictício sem fins comerciais.</span>
            </Container>
        </StyledFooter>
    )
}