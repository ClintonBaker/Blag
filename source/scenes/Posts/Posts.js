import { React } from '@packages';
import './styles/Posts.css';

type PropsT = {
  children: any
};

const Posts = (props: PropsT) => {
  return (
    <div styleName="Posts">
      <p>This is Posts.</p>
    </div>
  );
};

export default Posts;
