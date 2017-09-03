import { React } from '@packages';

import './styles/CommentText.css';

type PropsT = {
  children: any
};

const CommentText = (props: PropsT) => {
  return (
    <div styleName="CommentText">
      <p>This is CommentText.</p>
    </div>
  );
};

export default CommentText;
