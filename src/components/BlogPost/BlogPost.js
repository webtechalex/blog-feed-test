import React from 'react'

const BlogPost = ({title, body}) => (
  <div className='blog-post'>
    <h3>{title}</h3>
    <p>{body}</p>
  </div>
)

export default BlogPost
