import { React } from '@packages';
import { Post } from '../../comps'

import './styles/PostView.css';

type PropsT = {
  children: any
};

const PostView = (props: PropsT) => {
  return (
    <div styleName="PostView">
      <Post/>
    </div>
  );
};

export default PostView;
