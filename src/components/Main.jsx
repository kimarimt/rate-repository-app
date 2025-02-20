import { StyleSheet, View } from 'react-native'
import AppBar from './util/AppBar'
import RepositoryList from './Repository/RepositoryList'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1
  }
})

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <RepositoryList />
    </View>
  )
}

export default Main