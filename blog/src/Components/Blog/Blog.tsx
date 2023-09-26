import React from 'react'
import { BlogModel } from '../../Models/BlogModel'

function Blog(props:BlogModel) {
  return (
      <>
          <h3>{props.title}</h3>
          <ul>
              <li>{props.id}</li>
              <li>{props.category}</li>
          </ul>
          
          <p>{props.description}</p>
      </>
  )
}

export default Blog