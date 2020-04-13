import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {

  constructor() {
    super()
    this.state = {
      pizzas: [],
      displayPizzas: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/pizzas")
      .then(response => response.json())
      .then(pizzaData => {
        this.setState({
          pizzas: pizzaData,
          displayPizzas: pizzaData
        })
      })
  }

  getPizzas = () => {
    fetch("http://localhost:3000/pizzas")
      .then(response => response.json())
      .then(pizzaData => {
        this.setState({
          pizzas: pizzaData,
          displayPizzas: pizzaData
        })
      })
  }

  setEditPizzaState = (pizza) => {
    this.setState({
      pizzaToEdit: pizza
    })
  }

  updateEditPizzaTopping = (topping) => {
    this.setState({
      pizzaToEdit: { ...this.state.pizzaToEdit, topping }
    })
  }

  updateEditPizzaSize = (size) => {
    this.setState({
      pizzaToEdit: { ...this.state.pizzaToEdit, size }
    })
  }

  updateEditPizzaVegetarian = (vegetarian) => {
    this.setState({
      pizzaToEdit: { ...this.state.pizzaToEdit, vegetarian }
    })
  }

  editPizza = () => {
    fetch(`http://localhost:3000/pizzas/${this.state.pizzaToEdit.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: this.state.pizzaToEdit.id,
        topping: this.state.pizzaToEdit.topping,
        size: this.state.pizzaToEdit.size,
        vegetarian: this.state.pizzaToEdit.vegetarian
      })
    })
      .then(this.getPizzas())
  }

  render() {
    return (
      <Fragment>
        <Header />
        <PizzaForm editPizza={this.editPizza} pizzaToEdit={this.state.pizzaToEdit} updateEditPizzaTopping={this.updateEditPizzaTopping} updateEditPizzaSize={this.updateEditPizzaSize} updateEditPizzaVegetarian={this.updateEditPizzaVegetarian} />
        <PizzaList displayPizzas={this.state.displayPizzas} setEditPizzaState={this.setEditPizzaState} />
      </Fragment>
    );
  }
}

export default App;
