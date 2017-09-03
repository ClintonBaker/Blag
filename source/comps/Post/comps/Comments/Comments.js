import { React } from '@packages';

import './styles/Comments.css';

type PropsT = {
  children: any
};

const Comments = (props: PropsT) => {
  return (
    <div styleName="Comments">
      <p>This is Comments.</p>
    </div>
  );
};

export default Comments;
