import React from 'react'
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

export default ComicBook
