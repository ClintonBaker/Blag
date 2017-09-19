import { React } from '@packages';
import { Post } from '../../comps'

import './styles/PostView.css';

type PropsT = {
  children: any
};

const generatePost = ( posts, postID ) =>{
  const postData = posts.filter( (data) =>{
    if(data.id.toString() === postID){
      return data;
    }
  });
  return <Post data={postData[0]}/>
}

const PostView = ( props: PropsT ) => {
  return (
    <div styleName="PostView">
      { generatePost(props.posts, props.params.id) }
    </div>
  );
};

export default PostView;
