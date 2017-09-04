import { React } from '@packages';

import { Comment } from './comps'

import './styles/Comments.css';

type PropsT = {
  children: any
};

const Comments = (props: PropsT) => {
  return (
    <div styleName="Comments">
      <Comment/>
    </div>
  );
};

export default Comments;
