import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { PublisherList } from '../components'

export const GET_PUBLISHERS = gql`
  query getPublisher {
    publishers: new {
      publisher
    }
  }
`

const groupByPublisher = publishers =>
  publishers.reduce(
    (groups, { publisher }) => ({
      ...groups,
      [publisher]: (groups[publisher] || 0) + 1
    }),
    {}
  )

const SideBarContainer = () => (
  <Query query={GET_PUBLISHERS}>
    {({ data, loading }) => {
      const { publishers } = data

      return (
        !loading && <PublisherList publishers={groupByPublisher(publishers)} />
      )
    }}
  </Query>
)

export default SideBarContainer
