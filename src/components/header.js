import React from 'react'
import { Link } from 'gatsby'
import { FaHome } from 'react-icons/fa'
import styled from 'react-emotion'

const Container = styled.div`
  ${tw`bg-teal-dark px-5 md:px-12 lg:px-32 py-8 py-8`};
`
const Title = styled.h1`
  ${tw`text-teal-lightest m-0`};
`
const StyledLink = styled(Link)`
  ${tw`no-underline text-inherit`};
`

const Header = ({ siteTitle }) => (
  <Container>
    <StyledLink to="/">
      <Title> <FaHome color="teal"/> {siteTitle}</Title>
    </StyledLink>
  </Container>
)

export default Header
