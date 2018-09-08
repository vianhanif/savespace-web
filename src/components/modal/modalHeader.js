import React, {Component} from 'react';

class modalHeader extends Component {
  render() {
    return (
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalCenterTitle">
          Modal title
        </h5>
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  }
}

export default modalHeader;
