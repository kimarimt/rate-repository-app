import Constants from 'expo-constants'
import { Pressable, ScrollView, StyleSheet, View } from 'react-native'
import { Link } from 'react-router-native'
import { useQuery } from '@apollo/client'
import Text from './Text'
import theme from '../../theme'
import useSignIn from './../../hooks/useSignIn'
import { CURRENT_USER } from '../../graphql/queries'

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

const AppBarLink = ({ text, path }) => (
  <View style={styles.link}>
    <Link to={path}>
      <AppBarText text={text} />
    </Link>
  </View>
)

const AppBarText = ({ text }) =>
  <Text fontSize='subheading' fontWeight='bold' style={styles.heading}>{text}</Text>

const AppBar = () => {
  const { data } = useQuery(CURRENT_USER)
  const { authStorage, apolloClient } = useSignIn()

  const signOut = async () => {
    await authStorage.removeAccessToken()
    await apolloClient.resetStore()
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarLink text='Repositories' path='/' />
        { data && data.me
          ? (
            <Pressable style={styles.link} onPress={signOut}>
              <AppBarText text='Sign Out' />
            </Pressable>
          )
          : <AppBarLink text='Sign In' path='/sign-in' />
        }
      </ScrollView>
    </View>
  )
}

export default AppBar