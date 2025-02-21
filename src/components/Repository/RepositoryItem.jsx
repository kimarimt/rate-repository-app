import { View, StyleSheet } from 'react-native'
import RepositoryInfo from './RepositoryInfo'
import Stats from '../Stats/Stats'

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
})

const RepositoryItem = ({ repository }) => (
  <View style={styles.container}>
    <RepositoryInfo repository={repository} />
    <Stats repository={repository} />
  </View>
)

export default RepositoryItem