import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion';
import Layout from '../components/layout'
import AuthBox from '../components/AuthBox'
import DescBox from '../components/DescBox'
import {UndrawBuilding } from 'react-undraw-illustrations';

const IntroContainer = styled.div`
  display: grid;
  grid-column-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr .5fr;
  grid-template-areas: "intro intro intro intro login login" "intro intro intro intro login login" "seperator seperator seperator seperator seperator seperator";
`;

const IntroArea = styled.div`
  grid-area: intro;
  width: 100%;
  display: block;
  height: 380px;
  background-image:  linear-gradient(
      #38A89D, #4DC0B5, #64D5CA
    );
  background-size: cover;
  -webkit-clip-path: url(#hero-clip);
  clip-path: url(#hero-clip);
}
`;

const IntroHeader = styled.div`
  ${tw`text-center text-teal-darker font-semibold bg-yellow my-8 p-3`};
`

const LoginArea = styled.div`
  grid-area: login;
  align-items: center;
  margin-top: 1rem;
`;

const Seperator = styled.div`
  grid-area: seperator;
    position: relative;
    height: 48px;
    background-image:  linear-gradient(
      #64D5CA, #64D5CA
    );
    ::after {
    content: '';
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 12'%3E%3Cpath d='m12 0l12 12h-24z' fill='%23fff'/%3E%3C/svg%3E");
    position: absolute;
    width: 100%;
    height: 12px;
    bottom: 0;
  }
  
`;

const Intro = () => (
  <IntroContainer>
  <IntroArea>
    <UndrawBuilding height= '200px' primaryColor= 'teal' />
    <IntroHeader>Hey, welcome to payRent! <br /> The easiest way to pay your rent online.</IntroHeader>
    <svg height="0" width="0" class="svg-clip">
        <defs>
            <clipPath id="hero-clip" clipPathUnits="objectBoundingBox">
              <polygon fill="none" points="0,0 1,0 .93,.5 1,1 0,1 "/>
            </clipPath>
        </defs>
    </svg>
  </IntroArea>
  <LoginArea>
    <AuthBox />
  </LoginArea>
  <Seperator>

  </Seperator>
  </IntroContainer>
)

export default Intro
