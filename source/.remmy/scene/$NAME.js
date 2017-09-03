import { React } from '@packages';
import './styles/$NAME.css';

type PropsT = {
  children: any
};

const $NAME = (props: PropsT) => {
  return (
    <div styleName="$NAME">
      <p>This is $NAME.</p>
    </div>
  );
};

export default $NAME;
