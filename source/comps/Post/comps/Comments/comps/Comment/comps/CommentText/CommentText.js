import { React } from '@packages';

import './styles/CommentText.css';

type PropsT = {
  children: any
};

const CommentText = (props: PropsT) => {
  return (
    <div styleName="CommentText">
      <p>
        This is a load of rubbish! Latveria will soon be liberated from your tyranny!
      </p>
    </div>
  );
};

export default CommentText;
