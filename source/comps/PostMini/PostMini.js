import { React } from '@packages';

import './styles/PostMini.css';

type PropsT = {
  children: any
};

const PostMini = (props: PropsT) => {
  const { data } = props;
  return (
    <div styleName="PostMini">
      <h3>{data.title.substr(0, 20)}</h3>
      <p>{data.body.substr(0, 80)}</p>
      <small>posted on 12/20/1993</small>
    </div>
  );
};

export default PostMini;
