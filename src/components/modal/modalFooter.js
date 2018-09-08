import React, {Component} from 'react';

class modalFooter extends Component {
  render() {
    return (
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          data-dismiss="modal">
          Close
        </button>
        <button type="button" className="btn btn-primary">
          Save changes
        </button>
      </div>
    );
  }
}

export default modalFooter;
