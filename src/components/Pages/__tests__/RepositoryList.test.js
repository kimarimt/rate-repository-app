import { render, screen } from '@testing-library/react-native'
import { within } from '@testing-library/react-native'
import RepositoryListContainer from '../../Repository/RepositoryListContainer'

const roundStat = (total) => {
  return total >= 1000
    ? +(total / 1000).toFixed(1) + 'K'
    : total
}

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders list items correctly', async () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
          'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      }

      const nodes = repositories.edges.map(edge => edge.node)
      render(<RepositoryListContainer repositories={nodes} />)

      const repos = screen.getAllByTestId('repositoryItem')
      const [firstRepo, secondRepo] = repos

      expect(firstRepo).toBeDefined()
      expect(secondRepo).toBeDefined()

      // firstRepo
      expect(within(firstRepo).getByText(nodes[0].fullName)).toBeDefined()
      expect(within(firstRepo).getByText(nodes[0].description)).toBeDefined()
      expect(within(firstRepo).getByText(nodes[0].language)).toBeDefined()

      const forksCount = roundStat(nodes[0].forksCount)
      const stargazersCount = roundStat(nodes[0].stargazersCount)
      expect(within(firstRepo).getByText(forksCount)).toBeDefined()
      expect(within(firstRepo).getByText(stargazersCount)).toBeDefined()
      expect(within(firstRepo).getByText(`${nodes[0].reviewCount}`)).toBeDefined()
      expect(within(firstRepo).getByText(`${nodes[0].ratingAverage}`)).toBeDefined()

      // secondRepo
      expect(within(secondRepo).getByText(nodes[1].fullName)).toBeDefined()
      expect(within(secondRepo).getByText(nodes[1].description)).toBeDefined()
      expect(within(secondRepo).getByText(nodes[1].language)).toBeDefined()

      const secondStargazer = roundStat(nodes[1].stargazersCount)
      expect(within(secondRepo).getByText(`${nodes[1].forksCount}`)).toBeDefined()
      expect(within(secondRepo).getByText(secondStargazer)).toBeDefined()
      expect(within(secondRepo).getByText(`${nodes[1].reviewCount}`)).toBeDefined()
      expect(within(secondRepo).getByText(`${nodes[1].ratingAverage}`)).toBeDefined()
    })
  })
})