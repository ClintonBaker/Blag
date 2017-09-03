import { React } from '@packages';

import './styles/Layout.css';

type PropsT = {
  children: any
};

const Layout = (props: PropsT) => {
  return (
    <div styleName="Layout">
      { props.children }
    </div>
  );
};

export default Layout;
