import { React } from '@packages';
import { NavBar } from '@comps';

import './styles/Layout.css';

type PropsT = {
  children: any
};

const Layout = (props: PropsT) => {
  return (
    <div styleName="Layout">
      <NavBar/>
      { props.children }
    </div>
  );
};

export default Layout;
