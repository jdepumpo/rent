import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'

const Container = styled.div`
  ${tw`bg-grey-lighter w-full ml-5 p-4 rounded shadow m-auto`};
`

const DescBox = () => (
  <Container>
    <span>test</span>
  </Container>
)

export default DescBox
