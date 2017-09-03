import { React } from '@packages';

import './styles/EditButton.css';

type PropsT = {
  children: any
};

const EditButton = (props: PropsT) => {
  return (
    <div styleName="EditButton">
      <p>This is EditButton.</p>
    </div>
  );
};

export default EditButton;
