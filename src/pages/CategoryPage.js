import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ProgressiveImage from '../shared/components/ProgressiveImage/ProgressiveImage';
import {getListCategory} from '../_actions/categoryActions';
import {logPageView, initGA} from '../shared/utils/Analytics';

import * as Components from '../components';

class CategoryPage extends Component {
  componentDidMount() {
    const {history} = this.props;
    this.props.actions.getListCategory(this.props.history);
    initGA();
    logPageView();
  }

  render() {
    let {listCategory} = this.props;
    return (
      <div className="category-page bg-light">
        <Components.topMenu>
          <Components.pageMenu>Kategori</Components.pageMenu>
        </Components.topMenu>
        <Components.contentWrapper
          contentName="category-content"
          padding="no-padding-xs full-100vh">
          {/* Please don't remove this example form collapse menu */}
          {/* <div className="category-list-gorup padding-xsmall border-bottom border-top">
            <div
              href="#collapseExample"
              className="category-list-collapse category-list-title"
              data-toggle="collapse">
              Atasan
              <span className="mdi mdi-menu-down animated-caret float-right" />
            </div>
          </div>
          <div className="category-list-group collapse" id="collapseExample">
            <Link to="/category/hijab">
              <div className="padding-sub-menu border-bottom category-list-sub">
                Blouse
              </div>
            </Link>
            <Link to="/category/hijab">
              <div className="padding-sub-menu border-bottom category-list-sub">
                Gamis
              </div>
            </Link>
          </div> */}
          {listCategory.length > 0
            ? listCategory.map((category, index) => {
                return (
                  <Link to={`/category/${category.name}`} key={index}>
                    <div className="category-list-group padding-xsmall border-bottom">
                      <div className="row">
                        <div
                          className="col-2 align-center"
                          style={{margin: 'auto'}}>
                          {category.image_thumb_path != null ? (
                            <div
                              className="rounded-circle img-fluid"
                              style={{width: '1.6rem', height: '1.6rem'}}>
                              <ProgressiveImage
                                image={category.image_thumb_path}
                                preview={category.image_thumb_path}
                                alt={'img-category' + category.id}
                              />
                            </div>
                          ) : (
                            <img
                              className="rounded-circle img-fluid"
                              src="https://i.pinimg.com/originals/88/2a/f9/882af9c0182e042783837a9deb7c4c35.jpg"
                              alt="img-category"
                              style={{width: '1.6rem', height: '1.6rem'}}
                            />
                          )}
                        </div>
                        <div className="col-10" style={{margin: 'auto 0'}}>
                          <div className="category-list-title" id={category.id}>
                            {category.name}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })
            : null}
        </Components.contentWrapper>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({getListCategory}, dispatch)
  };
}

const mapStateToProps = ({categoryReducers}) => {
  return categoryReducers;
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
