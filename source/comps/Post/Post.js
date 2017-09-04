import { React } from '@packages';
import { Author, Comments, PostText } from './comps';

import './styles/Post.css';

type PropsT = {
  children: any
};

const Post = (props: PropsT) => {
  return (
    <div styleName="Post">
      <Author/>
      <hr/>
      <PostText/>
      <hr/>
      <Comments/>
    </div>
  );
};

export default Post;
