import React, { Component } from 'react';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import ItemDeleteButton from './item_delete_button';
import ItemEditButton from './item_edit_button';

class RecipeItem extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  render() {
    const oneIng = this.props.recIngs.map((oneIng, id) => {
      return (
        <ListGroupItem key={id}>{oneIng}</ListGroupItem>
      )
    });

    return (
      <Panel header={this.props.recName} collapsible bsStyle="primary" expanded={this.state.open} eventKey={this.props.eKey} onClick={ () => this.setState({ open: !this.state.open }) }>
        <ListGroup>
          {oneIng}
        </ListGroup>
        <ItemEditButton updateFunc3={this.props.updateFunc2} keyName={this.props.recName} ings={this.props.recIngs} />
        <ItemDeleteButton deleteItemFunc={this.props.deleteItemFunc} keyName={this.props.recName} />
      </Panel>
    )
  }
}

export default RecipeItem;
