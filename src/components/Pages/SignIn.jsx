import { StyleSheet, View, TextInput, Pressable } from 'react-native'
import { useFormik } from 'formik'
import Text from '../util/Text'
import theme from '../../theme'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.onPrimary
  },
  form: {
    marginHorizontal: 15,
  },
  input: {
    height: 50,
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: theme.colors.textSecondary,
    padding: 10
  },
  button: {
    backgroundColor: theme.colors.primary,
    height: 50,
    borderRadius: 2,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
})

const initialValues = {
  username: '',
  password: ''
}

const SignIn = () => {
  const formik = useFormik({
    initialValues,
    onSubmit
  })

  const onSubmit = values => {
    console.log(values)
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          placeholder='Username'
          value={formik.values.username}
          onChangeText={formik.handleChange('username')}
          autoCapitalize='none'
          style={styles.input}
        />
        <TextInput
          placeholder='Password'
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
          style={styles.input}
          secureTextEntry
        />
        <Pressable style={styles.button} onPress={() => onSubmit(formik.values)}>
          <Text
            color='onPrimary'
            fontWeight='bold'
            fontSize='subheading'
          >
            Sign in
          </Text>
        </Pressable>
      </View>
    </View>
  )
}

export default SignIn