import React from 'react';
import ReactPlayer from 'react-player';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

interface iProps {
  url: string;
  title: string;
  description: string;
}

const Item = styled.li`
  margin: 0 0 50px;
  display: flex;
  padding: 30px;
  background-color: rgb(81, 87, 91);
  :last-child {
    margin-bottom: 0;
  }
`;

const TextArea = styled.div`
  width: 80%;
  color: white;
  padding: 10px 50px;
  h1 {
    font-size: 2rem;
  }
  p {
    font-size: 1.5rem;
  }
`;

export default function ListItem({ url, title, description }: iProps) {
  const history = useHistory();
  return (
    <Item onClick={() => history.push('/video-player?url=' + url)}>
      <ReactPlayer url={url} light width="80%" />
      <TextArea>
        <h1>{title}</h1>
        <p>{description}</p>
      </TextArea>
    </Item>
  );
}
