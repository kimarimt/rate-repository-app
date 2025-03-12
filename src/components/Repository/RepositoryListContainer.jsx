import { StyleSheet, View, FlatList } from 'react-native'
import RepositoryItem from './RepositoryItem'

const styles = StyleSheet.create({
  separator: {
    height: 10,
  }
})

const ItemSeparator = () => <View style={styles.separator} />

const RepositoryListContainer = ({ repositories }) => (
  <FlatList
    data={repositories}
    ItemSeparatorComponent={ItemSeparator}
    renderItem={({ item }) => <RepositoryItem repository={item} />}
    keyExtractor={item => item.id}
  />
)

export default RepositoryListContainer