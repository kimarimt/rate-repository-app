import { StyleSheet, View, TextInput, Pressable } from 'react-native'
import { Formik } from 'formik'
import Text from '../shared/Text'
import * as yup from 'yup'
import useSignIn from '../../hooks/useSignIn'
import theme from '../../theme'
import { useNavigate } from 'react-router-native'

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
  error: {
    color: '#9A4C5F',
    marginTop: 5
  },
  inputError: {
    borderColor: '#9A4C5F',
    borderWidth: 2
  }
})

const SignInSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required')
})

const SignIn = () => {
  const { signIn, authStorage, apolloClient } = useSignIn()
  const navigate = useNavigate()

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Formik
          initialValues={{
            username: '',
            password: ''
          }}
          validationSchema={SignInSchema}
          onSubmit={async (values, { resetForm }) => {
            try {
              const { data } = await signIn(values)
              await authStorage.setAccessToken(data.authenticate.accessToken)
              apolloClient.resetStore()
              resetForm()
              navigate('/')
            } catch (e) {
              console.log(e)
            }
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <View>
              <TextInput
                placeholder='Username'
                autoCapitalize='none'
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
                style={[styles.input, errors.username && touched.password && styles.inputError]}
              />
              {errors.username && touched.username &&
                <Text
                  fontSize='subheading'
                  style={styles.error}
                >
                  {errors.username}
                </Text>
              }
              <TextInput
                placeholder='Password'
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                style={[styles.input, errors.password && touched.password && styles.inputError]}
                secureTextEntry
              />
              {errors.password && touched.password &&
                <Text
                  fontSize='subheading'
                  style={styles.error}
                >
                  {errors.password}
                </Text>
              }
              <Pressable
                onPress={handleSubmit}
                style={styles.button}
              >
                <Text
                  color='onPrimary'
                  fontSize='subheading'
                  fontWeight='bold'
                >
                  Sign In
                </Text>
              </Pressable>
            </View>
          )}
        </Formik>
      </View>
    </View>
  )
}

export default SignIn