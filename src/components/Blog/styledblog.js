import styled from 'styled-components';

export const CardBlog = styled.div`
  width: 100%;
  height: 357px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.24), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
  margin-bottom: 16px;
  .blog-img {
    height: 185px;
    max-height: 185px;
    width: 100%;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .blog-title {
    padding: 16px 20px 4px;
    h2 {
      margin-bottom: 0;
      font-size: 16px;
      font-weight: bold;
      line-height: 1.38;
      letter-spacing: normal;
      color: #152934;
    }
  }
  .blog-excerpt {
    font-size: 12px;
    font-weight: 300;
    line-height: 1.83;
    color: #152934;
    height: 88px;
    padding: 4px 20px 16px;
  }
`;
