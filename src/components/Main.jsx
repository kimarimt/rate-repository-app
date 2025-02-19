import Constants from 'expo-constants'
import { StyleSheet, SafeAreaView } from 'react-native'
import RepositoryList from './RepositoryList'

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1
  }
})

const Main = () => {
  return (
    <SafeAreaView style={styles.container}>
      <RepositoryList />
    </SafeAreaView>
  )
}

export default Main