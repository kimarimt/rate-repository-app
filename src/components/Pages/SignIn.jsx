import { StyleSheet, View } from 'react-native'
import Text from '../util/Text'
import theme from '../../theme'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.onPrimary
  }
})

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Text>The sign-in-view</Text>
    </View>
  )
}

export default SignIn