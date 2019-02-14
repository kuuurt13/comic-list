import React, { useRef } from 'react'

const {
  REACT_APP_COVER_IMAGE_URL: coverUrl,
  REACT_APP_COVER_DEFAULT_URL: defaultUrl
} = process.env

const ComicBook = ({ diamondId }) => {
  const ref = useRef(null)

  return (
    <img
      ref={ref}
      alt={diamondId}
      src={`${coverUrl}${diamondId.slice(0, 2)}/${diamondId}.jpg`}
      onError={() => (ref.current.src = defaultUrl)}
    />
  )
}

export default ComicBook
