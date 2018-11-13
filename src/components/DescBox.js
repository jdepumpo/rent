import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'
import PropTypes from 'prop-types'
import {FaLock, FaHome} from 'react-icons/fa'

const Container = styled.div`
  ${tw`bg-grey-lighter w-full p-4 rounded shadow`};
`

const DescBox = ({ title, children, icon }) => (
  <Container>
    <FaHome />
    <h2>{title}</h2>
    <p>{children}</p>
  </Container>
)

export default DescBox

DescBox.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  icon: PropTypes.string.isRequired,
};