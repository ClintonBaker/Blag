import { React } from '@packages';

import './styles/Comment.css';

type PropsT = {
  children: any
};

const Comment = (props: PropsT) => {
  return (
    <div styleName="Comment">
      <p>This is Comment.</p>
    </div>
  );
};

export default Comment;
