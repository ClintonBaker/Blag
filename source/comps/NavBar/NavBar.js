import { React } from '@packages';
import { IndexLink, Link } from 'react-router';

import './styles/NavBar.css';

type PropsT = {
  children: any
};

const NavBar = (props: PropsT) => {
  return (
    <div styleName="NavBar">
      <ul styleName='NavContent'>
        <li>
          <IndexLink to='/'>Home</IndexLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
