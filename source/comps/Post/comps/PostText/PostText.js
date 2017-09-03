import { React } from '@packages';

import './styles/PostText.css';

type PropsT = {
  children: any
};

const PostText = (props: PropsT) => {
  return (
    <div styleName="PostText">
      <p>This is PostText.</p>
    </div>
  );
};

export default PostText;
