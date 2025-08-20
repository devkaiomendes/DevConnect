import React from 'react'
import logo from '../../assets/logo-dio.png';
import { Button } from '../../components/Button';

import {
    Container,
    Row,
    Wrapper,
    BuscarImputContainer,
    Menu,
    MenuRight,
    Input,
    UserPicture
} from './styles';

const Header = ({autenticado}) => {
  return (
    <Wrapper>
        <Container> 
            <Row>
                <img src={logo} alt="Logo da dio" />
                {autenticado ? (
                    <>
                        <BuscarImputContainer>
                            <Input placeholder="Buscar..." />
                        </BuscarImputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>
                ) : null}
            </Row>
            <Row>
                {autenticado ? (
                    <UserPicture src='https://avatars.githubusercontent.com/u/181578920?v=4' />
                ) : (
                    <>
                <MenuRight href='#'>Header</MenuRight>
                <Button title="Entrar"/>
                <Button title="Cadastrar"/>
                    </>
                )}
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }