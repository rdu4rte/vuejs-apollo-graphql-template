import { onError } from 'apollo-link-error'
import router from '../router'

export const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path, extensions }) => {
      console.log(
        `[GraphQL Error] Message: ${message}, Location: ${JSON.stringify(locations)}, Path: ${path}, Code: ${
          extensions.exception.code
        }`
      )
      if (message.includes('Not authorized')) {
        router.push('/signin')
      }
    })
  if (networkError) console.log(`[Network Error] ${networkError}`)
})
