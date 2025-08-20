import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'

import {
     CardContainer,
     Content,
     HasInfo,
     ImageBackground,
     PostInfo,
     UserInfo,
     UserPicture
        } from "./styles"


const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src="https://picsum.photos/800/200" />
        <Content>
            <UserInfo>
                <UserPicture src='https://avatars.githubusercontent.com/u/181578920?v=4' />
                <div>
                    <h4>Kaio Mendes</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de HTML e CSS</h4>
                <p>Projeto feito o curso de html e css no bootcamp dio do Global avanade...<strong>Saiba mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #Javascript</h4>
                    <p>
                        <FiThumbsUp /> 10
                    </p>
                </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card }