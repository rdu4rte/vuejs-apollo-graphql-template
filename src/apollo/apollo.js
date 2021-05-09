import Vue from 'vue'
import VueApollo from 'vue-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { from } from 'apollo-link'
import { authMiddleware, errorLink } from './'

const httpLink = new HttpLink({
  uri: process.env.VUE_APP_GRAPHQL_ENDPOINT
})

export const apolloClient = new ApolloClient({
  link: from([authMiddleware, errorLink, httpLink]),
  cache: new InMemoryCache(),
  connectToDevTools: true
})

Vue.use(VueApollo)

export const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})
