import { ApolloLink } from 'apollo-link'

const token = localStorage.getItem('token') || null
export const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: `Bearer ${token}`
    }
  })
  return forward(operation)
})
