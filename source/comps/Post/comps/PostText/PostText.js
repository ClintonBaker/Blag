import { React } from '@packages';

import './styles/PostText.css';

type PropsT = {
  children: any
};

const PostText = (props: PropsT) => {
  return (
    <div styleName="PostText">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec leo arcu, laoreet ac urna in, maximus rhoncus metus. Suspendisse auctor dui et leo faucibus venenatis. Nullam laoreet augue nec sapien semper, a vulputate felis eleifend. Morbi eget dolor purus. Phasellus eget porttitor est, vel pretium lectus. Curabitur vitae varius turpis. Nullam dignissim ultricies convallis. Praesent semper vitae ante et tempor. Vivamus nec euismod nisl. Curabitur condimentum justo ante, sit amet ultricies ante tristique at. Nulla ut orci luctus, facilisis leo non, blandit diam.

      Aliquam vitae tortor a augue blandit porttitor eu nec tellus. Quisque hendrerit ex et neque condimentum dapibus. Integer a ornare ligula. Donec vulputate massa ut consectetur interdum. Quisque sed sodales lectus. In imperdiet bibendum sagittis. Ut at egestas diam. In pharetra, magna eu imperdiet scelerisque, ligula nulla dignissim tortor, ac posuere elit magna non tellus. Morbi imperdiet ultrices massa, egestas ornare lorem malesuada vitae.

      Sed dapibus sit amet lectus lobortis varius. Vestibulum euismod posuere dui, at finibus diam auctor non. Nunc imperdiet non neque sit amet congue. Aenean egestas neque ac vestibulum dapibus. Praesent gravida tortor odio, nec porta est tempus sed. Maecenas eros quam, cursus a mattis vitae, vehicula vel ante. Maecenas semper, urna non finibus euismod, lectus odio blandit urna, non scelerisque arcu eros ac eros. Phasellus orci dolor, vestibulum ac enim at, molestie scelerisque odio.

      Nam eu ultrices enim, id porta nisl. Integer vehicula ante at quam sagittis euismod. Proin sit amet leo ipsum. Etiam nec lorem pellentesque, rutrum felis ut, faucibus odio. Pellentesque suscipit sem vitae lectus imperdiet, sed ullamcorper nulla ullamcorper. Praesent varius ante vel turpis dapibus, vitae rhoncus massa facilisis. Donec risus urna, molestie in molestie sit amet, tempus a lacus. Quisque at massa vitae libero aliquam hendrerit in varius orci. Suspendisse imperdiet fermentum sapien, ac faucibus mi vulputate et. Sed consequat velit ac metus semper, eget aliquet risus scelerisque. Vivamus pharetra ac lorem at luctus. Pellentesque maximus finibus consectetur. Fusce dictum accumsan sagittis.

      Aliquam lectus velit, hendrerit sit amet tempus eget, pulvinar tincidunt eros. Proin sollicitudin arcu quis magna mollis ultrices. Vivamus aliquet lacus euismod imperdiet aliquam. Quisque sollicitudin rhoncus nibh, in bibendum est pretium in. Sed vehicula, nulla sed pharetra placerat, felis nisi bibendum lectus, ut bibendum tellus lorem at metus. Fusce pellentesque ligula dui, vitae porta lectus vehicula quis. Morbi ac dignissim nibh, sit amet sollicitudin dui. Quisque commodo euismod nisl. Aliquam efficitur dignissim accumsan. Sed ultrices quam massa, sed ullamcorper massa luctus vel. Praesent placerat diam nulla, condimentum viverra nulla laoreet ac. Mauris nec tellus dolor. Mauris cursus nunc risus, quis fermentum purus fermentum euismod. Nulla nec laoreet erat, ut feugiat lacus. Etiam congue orci enim, et fringilla ipsum vulputate tincidunt. Aliquam ut erat sed risus blandit maximus.
      </p>
    </div>
  );
};

export default PostText;
