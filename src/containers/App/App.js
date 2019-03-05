import React, { Component } from 'react';
import Title from '../../components/Title/Title'
import BlogFeed from '../BlogFeed/BlogFeed'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <BlogFeed />
      </div>
    );
  }
}

export default App;
