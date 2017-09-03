import { React } from '@packages';
import './styles/Search.css';

type PropsT = {
  children: any
};

const Search = (props: PropsT) => {
  return (
    <div styleName="Search">
      <p>This is Search.</p>
    </div>
  );
};

export default Search;
