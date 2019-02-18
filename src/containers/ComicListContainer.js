import React from 'react'
import { Query } from 'react-apollo'
import { ComicBook } from '../components'
import { GET_NEW_COMICS } from '../graphql/queries'

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
