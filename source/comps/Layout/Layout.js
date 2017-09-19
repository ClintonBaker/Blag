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
  posts = [];

  setPosts = () => {
    return React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        posts: this.posts
      });
    });
  }

  retrievePosts = () => {
    console.log('Posts updated');
      getPosts().then( posts => {
        this.posts = posts;
      });
  };

  render(){
    this.retrievePosts();
    const postsRetrieved = !!this.posts.length;
    return (
      <div styleName="Layout">
        <NavBar/>
        {
          this.setPosts()
        }
      </div>
    );
  };
};

export default Layout;
