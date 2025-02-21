import { StyleSheet, View } from 'react-native'
import Stat from './Stat'

const styles = StyleSheet.create({
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingBottom: 10,
  },
})

const Stats = ({ repository }) => (
  <View style={styles.stats}>
    <Stat category='Stars' total={repository.stargazersCount} />
    <Stat category='Forks' total={repository.forksCount} />
    <Stat category='Reviews' total={repository.reviewCount} />
    <Stat category='Rating' total={repository.ratingAverage} />
  </View>
)

export default Stats