import { React } from '@packages';

import './styles/Avatar.css';

type PropsT = {
  children: any
};

const Avatar = (props: PropsT) => {
  const imgSrc = 'https://static.comicvine.com/uploads/scale_small/4/49448/1695377-mrfantastic.jpg';
  return (
    <img styleName='Avatar' src={imgSrc}/>
  );
};

export default Avatar;
