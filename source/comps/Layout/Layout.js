import { React } from '@packages';
import { NavBar } from '@comps';

import './styles/Layout.css';

const API_POSTS_PATH = 'https://jsonplaceholder.typicode.com/posts';

const getPosts = () => {
  return fetch(API_POSTS_PATH).then( res =>
      res.json()).then( json => {
        return json;
      });
};

class Layout extends React.Component {
  state = {
    posts: []
  }

  componentWillMount(){
    this.retrievePosts();
  }

  setPosts = () => {
    return React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        posts: this.state.posts
      });
    });
  }

  retrievePosts = () => {
      getPosts().then( posts => {
        this.setState({
          posts
        });
      });
  };

  render(){
    const postsRetrieved = !!this.state.posts.length;
    return (
      <div styleName="Layout">
        <NavBar/>
        {
          postsRetrieved
          ? this.setPosts()
          : <small>Loading...</small>
        }
      </div>
    );
  };
};

export default Layout;
