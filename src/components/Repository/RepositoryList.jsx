import { FlatList, View, StyleSheet } from 'react-native'
import { REPOSITORIES } from '../../data/repositoryData'
import RepositoryItem from './RepositoryItem'

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: '#E1E5E7'
  }
})

const ItemSeparator = () => <View style={styles.separator} />

const RepositoryList = () => {
  return (
    <FlatList
      data={REPOSITORIES}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem repository={item} />}
      keyExtractor={item => item.id}
    />
  )
}

export default RepositoryList