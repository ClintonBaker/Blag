import { React } from '@packages';

import { Comment } from './comps'

import './styles/Comments.css';

type PropsT = {
  children: any
};

const Comments = (props: PropsT) => {
  return (
    <div styleName="Comments">
      <p>This is Comments.</p>
      <p>And this is my Comment:</p>
      <Comment/>
    </div>
  );
};

export default Comments;
