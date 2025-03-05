import { StatusBar } from 'react-native'
import { NativeRouter } from 'react-router-native'
import { ApolloProvider } from '@apollo/client'
import Main from './src/components/Main'
import createApolloClient from './src/utils/apolloClient'
import AuthStorage from './src/utils/authStorage'
import AuthStorageContext from './src/context/AuthStorageContext'

const authStorage = new AuthStorage()
const apolloClient = createApolloClient(authStorage)

const App = () => (
  <>
    <NativeRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true
      }}
    >
      <ApolloProvider client={apolloClient}>
        <AuthStorageContext.Provider value={authStorage}>
          <Main />
        </AuthStorageContext.Provider>
      </ApolloProvider>
    </NativeRouter>
    <StatusBar style='auto' />
  </>
)

export default App