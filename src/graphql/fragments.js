export const REPO_DETAILS = `
  fragment RepoDetails on Repository {
    id
    ownerName
    name
    createdAt
    fullName
    ratingAverage
    reviewCount
    stargazersCount
    watchersCount
    forksCount
    openIssuesCount
    url
    ownerAvatarUrl
    description
    language
    userHasReviewed
  }
`