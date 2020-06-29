import React from 'react';
import ReactPlayer from 'react-player';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import FAB from '../../components/FAB';

const Page = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default function VideoPlayer() {
  const location = useLocation();
  let url = new URLSearchParams(location.search).get('url');

  return (
    <Page>
      <ReactPlayer url={url as string} loop width="100%" height="100%" controls />
      <FAB />
    </Page>
  );
}
