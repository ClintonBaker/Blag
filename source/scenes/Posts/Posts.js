import { React } from '@packages';
import { Link } from 'react-router';
import { PostMini } from '@comps'
import './styles/Posts.css';

type PropsT = {
  children: any
};

const generatePostsList = ( posts ) => {
  return posts.map( (postData, index) => {
    return(
      <Link to={ '/postview/' + postData.id }>
        <PostMini key={index} data={ postData }/>
      </Link>
    );
  });
};

const Posts = ( props: PropsT ) => {
  return (
    <div styleName='Posts'>
      <div styleName='Posts-top'>
        <div styleName='Posts-title'>All My Blag Posts:</div>
      </div>
      <hr/>
      <div styleName='Posts-list'>
      { generatePostsList(props.posts) }
      </div>
    </div>
  )
};

export default Posts;
