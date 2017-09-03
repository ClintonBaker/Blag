import { React } from '@packages';

import './styles/LikeButton.css';

type PropsT = {
  children: any
};

const LikeButton = (props: PropsT) => {
  return (
    <div styleName="LikeButton">
      <p>This is LikeButton.</p>
    </div>
  );
};

export default LikeButton;
