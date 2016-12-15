import React, { Component } from 'react';
import { Modal, Button, FormGroup, FormControl } from 'react-bootstrap';

class ItemEditButton extends Component {
  constructor(props) {
    super(props);
      
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onAddRecClick = this.onAddRecClick.bind(this);
    this.onRecInputChange = this.onRecInputChange.bind(this);
    this.onIngInputChange = this.onIngInputChange.bind(this);
    this.state = { recValue: this.props.keyName, ingValue: this.props.ings, showModal: false };

    this.onEditClick = this.onEditClick.bind(this);
  }

  openModal() {
    this.setState({ showModal: true });
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  onAddRecClick(recName, recList) {
    localStorage.setItem(recName, recList);
    this.setState({ recValue: '', ingValue: '' });
    this.props.updateFunc3();
    this.closeModal();
  }

  onRecInputChange(e) {
    this.setState({ recValue: e.target.value});
  }

  onIngInputChange(e) {
    this.setState({ ingValue: e.target.value });
  }

  onEditClick() {
    this.openModal();
  }

  render() {
    return (
      <Button bsStyle='info' onClick={this.onEditClick}>
        Edit
        <Modal show={this.state.showModal} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add a Recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Recipe</h4>
            <form>
              <FormGroup>
                <FormControl type="text" onChange={this.onRecInputChange} value={this.state.recValue} placeholder="Borshe" />
              </FormGroup>
            </form>
            <h4>Ingredients</h4>
            <form>
              <FormGroup>
                <FormControl type="text" onChange={this.onIngInputChange} value={this.state.ingValue} placeholder="Enter, Ingredients, Seperated, by, Commas" />
              </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="success" onClick={() => {this.onAddRecClick(this.state.recValue, this.state.ingValue)}}>Edit Recipe</Button>
            <Button bsStyle="danger" onClick={this.closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </Button>
    )
  }
}

export default ItemEditButton;
