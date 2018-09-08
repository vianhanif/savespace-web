import React from 'react';
import PropTypes from 'prop-types';

import CardBlog from './styledblog';

const BlogCard = ({image, title, excerpt}) => {
  return (
    <CardBlog>
      <div className="blog-img">
        <img src={image} alt="" />
      </div>
      <div className="blog-title">
        <h2>{title}</h2>
      </div>
      <div className="blog-excerpt">{excerpt}</div>
    </CardBlog>
  );
};

BlogCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  excerpt: PropTypes.string
};

export default BlogCard;
