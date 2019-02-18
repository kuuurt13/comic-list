import gql from 'graphql-tag'

export const GET_NEW_COMICS = gql`
  query newComics {
    comics: new {
      diamondId
      title
      publisher
    }
  }
`

export const GET_PUBLISHERS = gql`
  query getPublisher {
    publishers: new {
      publisher
    }
  }
`
