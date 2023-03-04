import React from 'react'
import { Container, Logo, Button, Navbar } from './style'


export function Header () {
    return (
        <Container>
            <Logo src="/public/img/logo.png" alt="logo do CodeChella" />
            <Button type="button"></Button>
            <Navbar>
                <ul>
                    <li><a href="#">A experiência</a></li>
                    <li><a href="#">Mapa de Setores</a></li>
                    <li><a href="#">Informações</a></li>
                    <li><a href="#">Ingresso</a></li>
                </ul>
            </Navbar> 
        </Container>
    )
}