import { React } from '@packages';
import './styles/New.css';

type PropsT = {
  children: any
};

const New = (props: PropsT) => {
  return (
    <div styleName="New">
      <p>This is New.</p>
    </div>
  );
};

export default New;
