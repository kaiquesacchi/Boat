import React from 'react';

import ListItem from '../../components/ListItem';
import styled from 'styled-components';

const Page = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  background-color: #111;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  width: 80%;
`;

export default function Home() {
  const videos = [
    {
      url: 'https://youtu.be/ClpFuDmvtCs',
      title: 'Simulação de Fluidos - 10m/s',
      description:
        'Vídeo gerado utilizando a engine de simulação de fluidos do Blender. A velocidade do fluxo de água é de 10m/s'
    },
    {
      url: 'https://youtu.be/4_XMj6qsOEc',
      title: 'Simulação de Fluidos - 16m/s',
      description:
        'Vídeo gerado utilizando a engine de simulação de fluidos do Blender. A velocidade do fluxo de água é de 16m/s. Nesse cenário, o balanço do barco é muito mais violento por conta da turbulência gerada pela água.'
    }
  ];

  return (
    <Page>
      <List>
        {videos.map((video, index) => {
          return <ListItem key={index} url={video.url} title={video.title} description={video.description} />;
        })}
      </List>
    </Page>
  );
}
