import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {
  state={
    pizzas: [],
    pizzaToEdit: {}
  }

  componentDidMount() {
    this.getPizzas()
  }

  getPizzas = () => {
    fetch('http://localhost:3000/pizzas')
      .then(r => r.json())
      .then(pizzas => {
        this.setState({ pizzas })
      })
  }

  editPizza = (pizza) => {
    // console.log(pizza)
    this.setState({
      pizzaToEdit: pizza
    })
  }

  changePizzaTopping = (topping) => {
    this.setState({
      pizzaToEdit: {...this.state.pizzaToEdit, topping: topping}
    },
    ()=>{console.log(this.state.pizzaToEdit)})
  }

  changePizzaSize = (size) => {
    this.setState({
      pizzaToEdit: {...this.state.pizzaToEdit, size: size}
    },
    ()=>{console.log(this.state.pizzaToEdit)})
  }

  changePizzaVegetarian = (value) => {
    this.setState({
      pizzaToEdit: {...this.state.pizzaToEdit, vegetarian: value === "Vegetarian" }
    },
    ()=>{console.log(this.state.pizzaToEdit)})

  }

  updatePizza = () => {
    console.log('yep')
    fetch(`http://localhost:3000/pizzas/${this.state.pizzaToEdit.id}`,{
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
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
        <Header/>
        <PizzaForm
          pizzaToEdit={this.state.pizzaToEdit}
          updatePizza={this.updatePizza}
          changePizzaTopping={this.changePizzaTopping}
          changePizzaSize={this.changePizzaSize}
          changePizzaVegetarian={this.changePizzaVegetarian} />
        <PizzaList
          pizzas={this.state.pizzas}
          editPizza={this.editPizza} />
      </Fragment>
    );
  }
}

export default App;
