import { React } from '@packages';
import { Post } from '@comps'
import './styles/Home.css';

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
      <Post key={index} data={ postData }/>
    )
  })
}

class Home extends React.Component {
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
          <div styleName='Home'>
            <div styleName='Home-top'>
              <div styleName='Home-title'>Home</div>
              <a href='#' styleName='Search-button' onClick={this.retrievePosts}>search</a>
            </div>
            <hr/>
            <div styleName='Posts'>
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

export default Home;
