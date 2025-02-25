import { FlatList, View, StyleSheet } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import RepositoryItem from '../Repository/RepositoryItem'
import Text from '../shared/Text'
import useRepositories from '../../hooks/useRepositories'

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
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

const ItemSeparator = () => <View style={styles.separator} />

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

  return (
    <FlatList
      data={repoNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem repository={item} />}
      keyExtractor={item => item.id}
    />
  )
}

export default RepositoryList