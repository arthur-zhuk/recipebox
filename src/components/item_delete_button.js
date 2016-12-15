import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class ItemDeleteButton extends Component {
  constructor(props) {
    super(props);

    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  onDeleteClick() {
    localStorage.removeItem(this.props.keyName);
    this.props.deleteItemFunc();
  }

  render() {
    return (
      <Button bsStyle='danger' onClick={this.onDeleteClick}>
        Delete
      </Button>
    )
  }
}

export default ItemDeleteButton;
