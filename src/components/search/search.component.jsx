import React from 'react'

import '../search/search.styles.css'
// I'm destructing this because i'm getting the props object
export const SearchBox = ({placeholder, searchField, handleChange}) => (
  <div>
    <div>
      <input
        className = 'search'
        type="search"
        value = { searchField }
        placeholder = {placeholder}
        onChange = {handleChange}
      /> 
    </div>
  </div>
);