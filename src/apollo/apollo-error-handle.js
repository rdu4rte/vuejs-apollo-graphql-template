import { onError } from 'apollo-link-error'

export const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path, extensions }) => {
      console.log(
        `[GraphQL Error] Message: ${message}, Location: ${JSON.stringify(locations)}, Path: ${path}, Code: ${
          extensions.exception.code
        }`
      )
    })
  if (networkError) console.log(`[Network Error] ${networkError}`)
})
