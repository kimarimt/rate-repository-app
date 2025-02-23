import { FlatList, View, StyleSheet } from 'react-native'
import { REPOSITORIES } from '../../data/repositoryData'
import RepositoryItem from '../Repository/RepositoryItem'

const styles = StyleSheet.create({
  separator: {
    height: 10,
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