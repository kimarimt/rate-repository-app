import Constants from 'expo-constants'
import { Pressable, StyleSheet, View } from 'react-native'
import Text from './Text'
import theme from '../../theme'

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.appBarBackground,
    paddingTop: Constants.statusBarHeight * 1.75,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20
  },
  heading: {
    color: theme.colors.appBarHeading
  }
})

const AppBar = () => {
  const handlePress = () => {
    console.log('pressed')
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={handlePress}>
        <Text
          style={styles.heading}
          fontWeight='bold'
          fontSize='subheading'
        >
        Repositories
        </Text>
      </Pressable>
    </View>
  )
}

export default AppBar