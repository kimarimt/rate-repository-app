import { ApolloClient, InMemoryCache } from '@apollo/client'

const createApolloClient = () => {
  return new ApolloClient({
    uri: 'http://192.168.1.103:4000/api/repositories',
    cache: new InMemoryCache()
  })
}

export default createApolloClient