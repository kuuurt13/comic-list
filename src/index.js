import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { ApolloProvider } from 'react-apollo'

const { REACT_APP_COMIC_API_URL } = process.env

const cache = new InMemoryCache()
const link = new HttpLink({
  uri: REACT_APP_COMIC_API_URL
})
const client = new ApolloClient({
  cache,
  link
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
