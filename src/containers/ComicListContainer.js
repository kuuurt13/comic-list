import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { ComicBook } from '../components'

export const GET_NEW_COMICS = gql`
  query newComics {
    comics: new {
      diamondId
      title
      publisher
    }
  }
`

const ComicListContainer = () => (
  <Query query={GET_NEW_COMICS}>
    {({ data, loading }) => {
      const { comics } = data

      if (loading) return <p>Loading...</p>

      return comics.map(comic => <ComicBook key={comic.diamondId} {...comic} />)
    }}
  </Query>
)

export default ComicListContainer
