import React from 'react'
import PropTypes from 'prop-types'
import styles from './PublisherList.module.scss'

const PublisherList = ({ publishers }) => (
  <div className={styles.container}>
    {Object.keys(publishers).map(pub => (
      <div key={pub}>
        {pub}: {publishers[pub]}
      </div>
    ))}
  </div>
)

PublisherList.propTypes = {
  publishers: PropTypes.object
}

export default PublisherList
