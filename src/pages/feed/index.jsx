import { Link } from 'react-router-dom';

import bannerImage from "../../assets/banner.png"
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';
import { Header } from '../../components/Header';

import { Container, Collumn, Title, TitleHighlight } from "./styles";

const Feed = () => {
  return (<>
      <Header autenticado={true} /> 
      <Container>
        <Collumn flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Collumn>
        <Collumn flex={1}>
          <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
          <UserInfo percentual={80} nome="Kaio Mendes" image="https://avatars.githubusercontent.com/u/181578920?v=4" />
          <UserInfo percentual={27} nome="Kaio Mendes" image="https://avatars.githubusercontent.com/u/181578920?v=4" />
          <UserInfo percentual={89} nome="Kaio Mendes" image="https://avatars.githubusercontent.com/u/181578920?v=4" />
          <UserInfo percentual={57} nome="Kaio Mendes" image="https://avatars.githubusercontent.com/u/181578920?v=4" />
          <UserInfo percentual={12} nome="Kaio Mendes" image="https://avatars.githubusercontent.com/u/181578920?v=4" />
        </Collumn>
        
      </Container>
  </>);
};

export { Feed };