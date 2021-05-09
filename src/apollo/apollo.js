import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import Vue from 'vue'
import VueApollo from 'vue-apollo'
import { authMiddleware } from './'
import { concat } from 'apollo-link'
import { onError } from 'apollo-link-error'

const httpLink = new HttpLink({
  // api url
  uri: process.env.VUE_APP_GRAPHQL_ENDPOINT
})

// apollo client
export const apolloClient = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache(),
  connectToDevTools: true
})

Vue.use(VueApollo)

export const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  errorHandler: onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path, extensions }) => {
        console.log(
          `[GraphQL Error] Message: ${message}, Location: ${locations}, Path: ${path}, Code: ${extensions.exception.code}`
        )
      })
    if (networkError) console.log(`[Network Error] ${networkError}`)
  })
})
