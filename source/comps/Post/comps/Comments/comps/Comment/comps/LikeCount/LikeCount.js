import { React } from '@packages';

import './styles/LikeCount.css';

type PropsT = {
  children: any
};

const LikeCount = (props: PropsT) => {
  return (
    <div styleName="LikeCount">
      <p>This is LikeCount.</p>
    </div>
  );
};

export default LikeCount;
