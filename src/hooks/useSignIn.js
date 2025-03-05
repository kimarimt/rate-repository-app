import { useApolloClient, useMutation } from '@apollo/client'
import { SIGN_IN } from '../graphql/mutations'
import useAuthStorage from './useAuthStorage'

const useSignIn = () => {
  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()
  const [mutate, result] = useMutation(SIGN_IN)

  const signIn = async ({ username, password }) => {
    return mutate({
      variables: {
        credentials: { username, password }
      }
    })
  }

  return { signIn, authStorage, apolloClient, result }
}

export default useSignIn