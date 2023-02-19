import React from 'react';
/* import _ from 'lodash'; */
import Spinner from '../../components/common/';
/* import Nomatch from '../Error'; */
import styled from 'styled-components';

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
  @media screen and (min-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
  }
  @media screen and (min-width: 1536px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
  }
`;

const Home = () => {
  return (
    <>
      <Container>
        <h1>Hola Mundo</h1>
        <Spinner />
      </Container>
    </>
  );
};

export default Home;
