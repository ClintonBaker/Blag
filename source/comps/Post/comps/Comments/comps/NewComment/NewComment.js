import { React } from '@packages';

import './styles/NewComment.css';

type PropsT = {
  children: any
};

const NewComment = (props: PropsT) => {
  return (
    <div styleName="NewComment">
      <p>This is NewComment.</p>
    </div>
  );
};

export default NewComment;
