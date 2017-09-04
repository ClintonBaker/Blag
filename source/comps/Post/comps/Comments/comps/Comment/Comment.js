import { React } from '@packages';
import { Author, CommentText } from './comps';

import './styles/Comment.css';

type PropsT = {
  children: any
};

const Comment = (props: PropsT) => {
  return (
    <div styleName="Comment">
      <Author/>
      <CommentText/>
    </div>
  );
};

export default Comment;
