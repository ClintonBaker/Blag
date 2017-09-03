import { React } from '@packages';
import './styles/Home.css';

type PropsT = {
  children: any
};

const Home = (props: PropsT) => {
  return (
    <div styleName="Home">
      <p>This is Home.</p>
    </div>
  );
};

export default Home;
