import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion';
import Layout from '../components/layout'
import DescBox from '../components/DescBox'
import Intro from '../components/Intro'

const DescContainer = styled.div`
  display: grid;
  grid-column-gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "box1 box2 box3";
  justify-items: center;
`;

const Box1Area = styled.div`
  grid-area: box1;
`;
const Box2Area = styled.div`
  grid-area: box2;
`;
const Box3Area = styled.div`
  grid-area: box3;
`;

const IndexPage = () => (
  <Layout>
    <Intro />
      <DescContainer>
          <Box1Area>
            <DescBox title="test123" icon="FaLock">
                testing
            </DescBox>
          </Box1Area>
          <Box2Area>
            <DescBox>
              
            </DescBox>
          </Box2Area>
          <Box3Area>
          <DescBox>
              
          </DescBox>
          </Box3Area>
        </DescContainer>
  </Layout>
)

export default IndexPage
