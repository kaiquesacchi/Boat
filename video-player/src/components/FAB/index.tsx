import React from 'react';
import styled from 'styled-components';
import { MdList } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
const Button = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background-color: #10ac75;
  position: fixed;
  right: 100px;
  bottom: 100px;
  border: none;
  box-shadow: 0 0 12px 5px rgba(0, 0, 0, 0.5);
  svg {
    font-size: 2.5rem;
    color: white;
  }
`;

export default function FAB() {
  const history = useHistory();
  return (
    <Button onClick={history.goBack}>
      <MdList />
    </Button>
  );
}
