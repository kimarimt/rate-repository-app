import { View, StyleSheet } from 'react-native'
import RepositoryInfo from './RepositoryInfo'
import Stats from '../Stats/Stats'
import theme from '../../theme'

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.onPrimary,
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