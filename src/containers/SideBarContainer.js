import React from 'react'
import { Query } from 'react-apollo'
import { PublisherList } from '../components'
import { GET_PUBLISHERS } from '../graphql/queries'

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
