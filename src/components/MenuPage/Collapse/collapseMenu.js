import React, {Fragment} from 'react';

import '@mdi/font/scss/materialdesignicons.scss';
import './collapseMenu.scss';

const Collapse = props => {
  const {id, title, children} = props;
  return (
    <Fragment>
      <div
        className="collapse-item"
        role="button"
        data-toggle="collapse"
        data-target={`#${id}`}
        aria-expanded="false"
        aria-controls={id}>
        <div className="item-title">{title}</div>
        <div className="item-arrow">
          <i className="mdi mdi-chevron-right" />
        </div>
      </div>
      <div className="collapse collapse-content" id={id}>
        <div className="content-description">{children}</div>
      </div>
    </Fragment>
  );
};

export default Collapse;
