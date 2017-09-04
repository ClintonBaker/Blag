import { React } from '@packages';

import { Avatar, Name } from './comps';

import './styles/Author.css';

type PropsT = {
  children: any
};

const Author = (props: PropsT) => {
  return (
    <div styleName="Author">
      <span> <Avatar/> <Name/> </span>
    </div>
  );
};

export default Author;
