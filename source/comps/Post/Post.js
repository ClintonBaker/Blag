import { React } from '@packages';
import { Author, Comments, PostText } from './comps';

import './styles/Post.css';

type PropsT = {
  children: any
};

const Post = (props: PropsT) => {
  const { data } = props;
  return (
    <div className="Post">
      <h3>{data.title.substr(0, 20)}</h3>
      <p>{data.body.substr(0, 80)}</p>
      <small>posted on 12/20/1993</small>
    </div>
  );
};

export default Post;
