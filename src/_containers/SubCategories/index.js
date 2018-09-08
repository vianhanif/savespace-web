import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import Button from '../../components/Button'
import * as subCategoryActions from '../../_actions/SubCategory'
import './style.scss'

class Spaces extends Component {

  componentWillMount() {
    this.props.dispatch(subCategoryActions.getSubCategories())
  }

  pickCategory(item) {
    this.props.dispatch(subCategoryActions.pickSubCategory(item))
    this.props.history.push('/home')
  }

  render() {
    let { Space } = this.props
    return (
      <Fragment>
        {this.props.SubCategory.list.length > 0 && (
          <div className="category-container">
            {this.props.SubCategory.list.map((item, index) => (
              <div className="category-item">
                <Button 
                type="rounded" 
                style={{background: item.color, border: 'none'}}
                onClick={() => this.pickCategory(item)}
                >
                  <img src=""/>
                </Button>
                <label>{item.name}</label>
              </div>
            ))}
          </div>
        )}
      </Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => ({
    dispatch
});
const mapStateToProps = state => ({
  SubCategory: state.SubCategory
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Spaces));