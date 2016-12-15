import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import RecipeBoxList from './components/recipe_box_list';
import ModalPopup from './components/modal_popup';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { recData: Object.entries(localStorage),  };
    this.handleAddClick = this.handleAddClick.bind(this);
    this.onRecItemDelClick = this.onRecItemDelClick.bind(this);
    this.updateVDOM = this.updateVDOM.bind(this);
  }
  // delete these
  handleAddClick() {
    this.setState({ recData: Object.entries(localStorage) });
  }

  onRecItemDelClick() {
    this.setState({ recData: Object.entries(localStorage) });
  }

  onRecItemEditClick() {
    // Open modal and grab data values from localStorage
    this.setState({ recData: Object.entries(localStorage) });
    console.log('nothing');
  }

  updateVDOM() {
    this.setState({ recData: Object.entries(localStorage) });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Recipe Box</h2>
        </div>
        <div className="container">
          <RecipeBoxList updateFunc1={this.updateVDOM} recName={this.state.recData} deleteItemFunc={this.updateVDOM} />
          <ModalPopup updateFunc={this.handleAddClick} editItemFunc={this.onRecItemEditClick} />
        </div>
      </div>
    );
  }
}

export default App;
