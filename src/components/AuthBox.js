import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'

const Container = styled.div`
  ${tw`bg-grey-lighter max-w-xs p-4 rounded shadow m-auto`};
`
const LoginInput = styled.input`
  ${tw`shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline`};
`
const InputLabel = styled.label`
  ${tw`block text-grey-darker text-sm font-bold my-2`};
`
const LoginButton = styled.button`
  ${tw`mt-4 bg-teal-dark hover:bg-teal-darker text-teal-lightest font-semibold py-2 px-4 border border-none rounded shadow focus:shadow-lg`};
`

const AuthBox = () => (
  <Container>
        <form class="identity-form-login" method="POST" action="/">
            <h3>Login</h3>
            <InputLabel for="email">Email</InputLabel>
            <LoginInput type="email" id="email" name="email" required />

            <InputLabel for="password">Password</InputLabel>
            <LoginInput type="password" id="password" name="password" required />

            <LoginButton type="submit" value="Login">Login</LoginButton>
        </form>
  </Container>
)

export default AuthBox
