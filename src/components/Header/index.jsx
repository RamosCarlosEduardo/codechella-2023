import React from 'react'
import { Container, Logo, Button, Navbar } from './style'
import { Link } from "react-router-dom";


export function Header () {
    return (
        <Container>
            <Link to="/">
                <Logo src="/img/logo.png" alt="logo do CodeChella" />
            </Link>
            <Button type="button"></Button>
            <Navbar>
                <ul>
                    <li><Link to="/experience">A experiência</Link></li>
                    <li><Link to="#">Mapa de Setores</Link></li>
                    <li><Link to="#">Informações</Link></li>
                    <li><Link to="#">Ingresso</Link></li>
                </ul>
            </Navbar> 
        </Container>
    )
}