import { React } from '@packages';

import './styles/Post.css';

type PropsT = {
  children: any
};

const Post = (props: PropsT) => {
  return (
    <div styleName="Post">
      <p>This is Post.</p>
    </div>
  );
};

export default Post;
