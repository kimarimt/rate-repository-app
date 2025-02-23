import { StatusBar } from 'react-native'
import { NativeRouter } from 'react-router-native'
import Main from './src/components/Main'

const App = () => (
  <>
    <NativeRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true
      }}
    >
      <Main />
    </NativeRouter>
    <StatusBar style='auto' />
  </>
)


export default App