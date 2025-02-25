import Constants from 'expo-constants'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Link } from 'react-router-native'
import Text from './Text'
import theme from '../../theme'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight * 1.75,
    paddingHorizontal: 10,
    paddingBottom: 20,
    backgroundColor: theme.colors.appBarBackground,
  },
  heading: {
    color: theme.colors.onPrimary
  },
  link: {
    padding: 10,
    marginRight: 10,
  }
})

const AppBar = () => {
  const tabs = [
    { text: 'Sign In', path: '/sign-in' },
    { text: 'Repostories', path: '/' },
  ]

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        {tabs.map((tab, i) => (
          <View key={i} style={styles.link}>
            <Link to={tab.path}>
              <Text fontSize='subheading' fontWeight='bold' style={styles.heading}>{tab.text}</Text>
            </Link>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default AppBar