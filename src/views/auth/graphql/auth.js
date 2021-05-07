import gql from 'graphql-tag'

export const SIGNUP = gql`
  mutation($username: String!, $email: String!, $password: String!, $password_confirm: String!) {
    createUser(
      UserDto: { username: $username, email: $email, password: $password, password_confirm: $password_confirm }
    ) {
      username
      email
      createdAt
    }
  }
`
