import { React } from '@packages';
import './styles/PostView.css';

type PropsT = {
  children: any
};

const PostView = (props: PropsT) => {
  return (
    <div styleName="PostView">
      <p>This is PostView.</p>
    </div>
  );
};

export default PostView;
