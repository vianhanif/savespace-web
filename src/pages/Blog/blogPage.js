import React, {Fragment, Component} from 'react';

import * as Components from '../components';
import BlogCard from '../../components/Blog/blogCard';
import BottomMenu from '../components/bottomMenu';

class BlogPage extends Component {
  render() {
    return (
      <Fragment>
        <Components.topMenu>
          <Components.pageMenu>eBaba Blog</Components.pageMenu>
        </Components.topMenu>
        <Components.contentWrapper
          contentName="category-content"
          padding="no-padding">
          <BlogCard image={'tes'} title={'tes'} excerpt={'tes'} />
        </Components.contentWrapper>
        <BottomMenu />
      </Fragment>
    );
  }
}

export default BlogPage;
