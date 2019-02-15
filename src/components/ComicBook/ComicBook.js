import React from 'react'
import PropTypes from 'prop-types'
import styles from './ComicBook.module.scss'
import { CoverImage } from '../'

const ComicBook = ({ title, publisher, diamondId }) => (
  <div className={styles.container}>
    <div>
      <CoverImage diamondId={diamondId} />
    </div>
    <div>
      <h3>{title}</h3>
      <span>{publisher}</span>
    </div>
  </div>
)

ComicBook.propTypes = {
  comic: PropTypes.shape({
    title: PropTypes.string,
    publisher: PropTypes.string,
    diamondId: PropTypes.string
  })
}

export default ComicBook
