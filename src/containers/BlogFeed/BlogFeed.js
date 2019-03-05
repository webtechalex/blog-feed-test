import React, { Component } from 'react'
import BlogPost from '../../components/BlogPost/BlogPost'

export default class BlogFeed extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    this.handleFetchPosts()
  }

  handleFetchPosts = () => fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(data => this.setState({posts: data}))

  render() {
    return this.state.posts.map(post => (
      <BlogPost
        key={post.id}
        title={post.title}
        body={post.body}
      />
    ))
  }
}
