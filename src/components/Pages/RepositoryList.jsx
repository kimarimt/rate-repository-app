import { View, StyleSheet } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import RepositoryListContainer from '../Repository/RepositoryListContainer'
import Text from '../shared/Text'
import useRepositories from '../../hooks/useRepositories'

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  error: {
    marginTop: 20,
    fontSize: 18,
    justifyContent: 'center',
    color: '#9A4C5F'
  }
})

const RepositoryList = () => {
  const { repoNodes, error, loading } = useRepositories()

  if (loading) {
    return (
      <View style={styles.textContainer}>
        <Text
          fontWeight='bold'
          style={{ fontSize: 18 }}
        >
          Loading...
        </Text>
      </View>
    )
  }

  if (error) {
    return (
      <View style={styles.textContainer}>
        <MaterialIcons name='error' size={100} color='#9A4C5F' />
        <Text
          fontWeight='bold'
          style={styles.error}
        >
          {error.message}
        </Text>
      </View>
    )
  }

  return <RepositoryListContainer repositories={repoNodes} />
}

export default RepositoryList