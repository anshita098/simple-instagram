import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: {
        1: {
          id: 1,
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIDVs5AGw-4QMCi3nbKG-FhOYAsctkBP3-GNu6vzeaQS34fiHu',
          likes: 0,
        },
        2: {
          id: 2,
          src: 'http://www.greatgrubclub.com/domains/greatgrubclub.com/local/media/images/medium/4_1_1_kiwi.jpg',
          likes: 0,
        },
        3: {
          id: 3,
          src: 'https://www.hindimeaning.com/pictures/fruits/apple.jpg',
          likes: 0,
        },
        4: {
          id: 4,
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFq7TvMWmqUWQDiHW7pA-m9eM6Rf8rOds6B9vm-hqM5WkLxiFrvA',
          likes: 0,
        }
      }
    }
    this.updateLike = this.updateLike.bind(this);
  }

  updateLike(id) {
    const post = this.state.posts[id];
    const like = post.likes;
    this.setState({
      posts: {
        ...this.state.posts,
        [id]: {
          id,
          ...post,
          likes: like + 1,
        }
      }
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Simple Instagram</h1>
        </header>
        <div>
          {Object.values(this.state.posts).map(({ src, likes, id }) =>
            <li>
              <img src={src} />
              <br />
              {likes}
              <button onClick={() => this.updateLike(id)}>
                like
            </button>
            </li>
          )}
        </div>
      </div>
    );
  }
}

export default App;
