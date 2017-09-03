import { React } from '@packages';

import './styles/Author.css';

type PropsT = {
  children: any
};

const Author = (props: PropsT) => {
  return (
    <div styleName="Author">
      <p>This is Author.</p>
    </div>
  );
};

export default Author;
