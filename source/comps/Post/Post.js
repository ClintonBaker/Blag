import { React } from '@packages';

import './styles/Post.css';

type PropsT = {
  children: any
};

const Post = (props: PropsT) => {
  const { data } = props;
  return (
    <div styleName="Post">
      <h3>{data.title}</h3>
      <p>{data.body}</p>
      <small>posted on 12/20/1993</small>
    </div>
  );
};

export default Post;
