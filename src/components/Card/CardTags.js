import React, {Fragment} from 'react';
import {Link, withRouter} from 'react-router-dom';
import CardTag from './CardTag';

const CardTags = ({subProducts}) => {
  const defineTagPos = pos => (pos !== null ? pos : '50%');
  return (
    <Fragment>
      {subProducts.map(({id, tag_x_pos, tag_y_pos, name, display_price}) => {
        const h = defineTagPos(tag_x_pos);
        const v = defineTagPos(tag_y_pos);
        const subProductLink = `/detail/${id}`;
        return (
          <Link to={subProductLink} key={id}>
            <CardTag
              price={display_price}
              title={name}
              horizontalPos={h}
              verticalPos={v}
            />
          </Link>
        );
      })}
    </Fragment>
  );
};

export default withRouter(CardTags);
