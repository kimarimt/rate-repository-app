import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../graphql/queries'

const useRepositories = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network'
  })

  const repoNodes = data
    ? data.repositories.edges.map(repository => repository.node)
    : []

  return { repoNodes, error, loading }
}

export default useRepositories