import React, { Component } from 'react';
import { Well, Accordion } from 'react-bootstrap';
import RecipeItem from './recipe_item';

class RecipeBoxList extends Component {
  render() {
    const recipeList = this.props.recName.map((recipe, id) => {
      return <RecipeItem
				updateFunc2={this.props.updateFunc1}
				deleteItemFunc={this.props.deleteItemFunc}
				key={id}
				recName={recipe[0]}
				recIngs={recipe[1].split(",")}
				eKey={id + 1}
			/>
    });
    return (
      <Well>
        <Accordion>
          {/*map through each item an array of recipes */}
          {recipeList}
        </Accordion>
      </Well>
    )
  }
}

export default RecipeBoxList;
