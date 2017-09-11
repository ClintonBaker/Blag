import { React } from '@packages';
import { Post } from '../../comps'

import './styles/PostView.css';

const API_POSTS_PATH = 'https://jsonplaceholder.typicode.com/posts';

const getPosts = () => {
  return fetch(API_POSTS_PATH).then( res =>
      res.json()).then( json => {
        return json;
      });
};

class PostView extends React.Component {
  state = {
    posts: []
  }

  componentWillMount(){
    this.retrievePosts();
  }

  retrievePosts = () => {
    console.log('retrievePosts');
      getPosts().then( posts => {
        this.setState({
          posts
        });
      });
  };

  generatePost = ( posts ) =>{
    const postData = posts.filter( (data) =>{
      if(data.id.toString() === this.props.params.id){
        return data;
      }
    });
    return <Post data={postData[0]}/>
  }

  render(){
    const postsHaveBeenFetched = !!this.state.posts.length;
    return (
      <div styleName="PostView">
        {
          postsHaveBeenFetched
          ? this.generatePost(this.state.posts)
          : <small>Loading...</small>
        }
      </div>
    );
  }
};

export default PostView;
