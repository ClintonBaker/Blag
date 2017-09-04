import { React } from '@packages';

import './styles/Avatar.css';

type PropsT = {
  children: any
};

const Avatar = (props: PropsT) => {
  const imgSrc = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN69PbRv-tKwJvaUxU2tH6L2vgVYopNqNHszkQwIIeYnfFhTIj';
  return (
    <img styleName='Avatar' src={imgSrc}/>
  );
};

export default Avatar;
