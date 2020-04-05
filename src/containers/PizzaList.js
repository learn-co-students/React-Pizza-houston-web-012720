import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  displayPizza = () => {
    return this.props.pizzas.map(pizza => 
      <Pizza 
        pizza = {pizza} 
        editPizza = {this.props.editPizza}
        key = {`${pizza.id} ${pizza.topping}`} 
      />
    )
  }

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            this.displayPizza()
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
