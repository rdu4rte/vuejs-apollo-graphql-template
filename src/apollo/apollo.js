import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import Vue from 'vue'
import VueApollo from 'vue-apollo'
import { errorLink } from './apollo-error-handle'

const httpLink = new HttpLink({
  // api url
  uri: process.env.VUE_APP_GRAPHQL_ENDPOINT
})

// apollo client
export const apolloClient = new ApolloClient({
  link: errorLink.concat(httpLink),
  cache: new InMemoryCache(),
  connectToDevTools: true
})

Vue.use(VueApollo)

export const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})
