import React from 'react'

const GifSearch = ({ onSubmitSearch }) => {
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      onSubmitSearch(e.target.name.value)
    }}>
      <label for="name">Enter a Search Term</label>
      <input type="text" id="name" />
      <input type='submit'/>
    </form>
  )
}

export default GifSearch
