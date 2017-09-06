import { React } from '@packages';

import './styles/Image.css';

type PropsT = {
  children: any
};

const Image = (props: PropsT) => {
  return (
    <img src={ props.src }/>
  );
};

export default Image;
