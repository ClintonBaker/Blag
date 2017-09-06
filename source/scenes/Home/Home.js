import { React } from '@packages';
import { Image } from '@comps';
import './styles/Home.css';

type PropsT = {
  children: any
};

const Home = (props: PropsT) => {
  const bill = 'http://fillmurray.com/g/300/200';
  return (
    <div styleName="Home">
      <div styleName='Home-title'>
        <h2>Blag</h2>
      </div>
      <div styleName='Home-content'>
        <p>Hello, and welcome to the Blag! This is a super professional blag created
          to be super awesome. I love my blag, and I'm sure you will too! This blag
          is full of posts created with nothing but Lorem Ipsum! Impressive huh??</p>
          <span>Here's a Bill Murray:</span>
          <Image src={ bill }/>
      </div>
    </div>
  );
};

export default Home;
