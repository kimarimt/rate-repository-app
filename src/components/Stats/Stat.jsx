import { View, StyleSheet } from 'react-native'
import Text from '../util/Text'

const styles = StyleSheet.create({
  stat: {
    alignItems: 'center'
  },
  total: {
    marginBottom: 5
  },
})

const Stat = ({ category, total }) => {
  const count = total >= 1000
    ? +(total / 1000).toFixed(1) + 'K'
    : total

  return (
    <View style={styles.stat}>
      <Text
        fontWeight='bold'
        fontSize='subheading'
        style={styles.total}
      >
        {count}
      </Text>
      <Text color='textSecondary'>{category}</Text>
    </View>
  )
}

export default Stat