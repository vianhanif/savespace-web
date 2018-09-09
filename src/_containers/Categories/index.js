import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import Button from '../../components/Button'
import * as categoryActions from '../../_actions/Category'
import './style.scss'

class Categories extends Component {

  componentWillMount() {
    this.props.dispatch(categoryActions.getCategories())
  }

  pickCategory(item) {
    this.props.dispatch(categoryActions.pickCategory(item))
    this.props.history.push(`/category/${item.id}/sub_categories`)
  }

  render() {
    return (
      <Fragment>
        {this.props.Category.list.length > 0 && (
          <div className="category-container">
            {this.props.Category.list.map((item, index) => (
              <div className="category-item" key={index}>
                <Button 
                type="rounded" 
                style={{background: item.color, border: 'none'}}
                onClick={() => this.pickCategory(item)}
                >
                  <div className="image"
                    style={{
                      background: `url('${item.image}') no-repeat center`,
                      backgroundSize: 'cover'
                    }}
                  />
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
  Category: state.Category
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Categories));