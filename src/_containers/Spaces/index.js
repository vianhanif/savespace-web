import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import * as spaceActions from '../../_actions/Space'
import Card from '../../components/Cards'
import CardGroup from '../../components/Cards/Group'

class Spaces extends Component {

  componentWillMount() {
    this.props.dispatch(spaceActions.getSpaces())
  }

  render() {
    let { Space } = this.props
    return (
      <Fragment>
        {Space.list.length > 0 && (
          <Fragment>
            {Space.list.map((group, g_index) => (
              <CardGroup key={g_index} title={group.category.name}>
                {group.spaces.map((space, index) => (
                  <Card key={index}
                    image={space.images[0].original_path}
                    title={space.name}
                    description={`${space.rate} Stars. ${space.address}`}
                  />
                ))}
              </CardGroup>
            ))}
          </Fragment>
        )}
      </Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => ({
    dispatch
});
const mapStateToProps = state => ({
    User: state.User,
    Space: state.Space
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Spaces));