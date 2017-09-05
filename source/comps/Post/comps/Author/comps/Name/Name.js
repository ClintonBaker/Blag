import { React } from '@packages';

import './styles/Name.css';

type PropsT = {
  children: any
};

const Name = (props: PropsT) => {
  return (
    <span styleName='Name'>Victor Von Doom</span>
  );
};

export default Name;