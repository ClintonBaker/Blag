import { React } from '@packages';
import { Link } from 'react-router';
import { Post } from '@comps'
import './styles/Posts.css';

const API_POSTS_PATH = 'https://jsonplaceholder.typicode.com/posts';

const getPosts = () => {
  return fetch(API_POSTS_PATH).then( res =>
      res.json()).then( json => {
        return json;
      });
};

const generatePostsList = ( posts ) => {
  return posts.map( (postData, index) => {
    return(
      <Link to={ '/postview/' + postData.id }>
        <Post key={index} data={ postData }/>
      </Link>
    );
  });
};

class Posts extends React.Component {
  state = {
    posts: []
  };

  retrievePosts = () => {
      getPosts().then( posts => {
        console.log({ posts });
        this.setState({
          posts
        });
      });
  };

  render() {
    const postsHaveBeenFetched = !!this.state.posts.length;
      return (
          <div styleName='Posts'>
            <div styleName='Posts-top'>
              <div styleName='Posts-title'>All My Blag Posts:</div>
              <a href='#/posts' styleName='Search-button' onClick={this.retrievePosts}>search</a>
            </div>
            <hr/>
            <div styleName='Posts-list'>
            {
              postsHaveBeenFetched
              ? generatePostsList(this.state.posts)
              : <small>I got nothin</small>
            }
            </div>
          </div>
      )
  }
};

export default Posts;
