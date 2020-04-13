import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'


class App extends Component {

  state = {
    pizzaList: [],
    pizzaForm: {}
  }

  componentDidMount(){
    this.pizzas()
  }

  pizzas = () => {
    fetch('http://localhost:3000/pizzas')
      .then(resp => resp.json())
      .then(pizzas => {
        this.setState({
          pizzaList: pizzas
        })
      })
  }

  formTopping = (e) => {
    this.setState({
      pizzaForm: {...this.state.pizzaForm, topping: e}
    })
  }

  formSize = (e) => {
    this.setState({
      pizzaForm: {...this.state.pizzaForm, size: e}
    })
  }

  formVeg = (e) => {
    this.setState({
      pizzaForm: {...this.state.pizzaForm, vegetarian: e}
    })
  }

  formSubmit = (pizza) => {
    fetch(`http://localhost:3000/pizzas/${this.state.pizzaForm.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        topping: this.state.pizzaForm.topping,
        size: this.state.pizzaForm.size,
        vegetarian: this.state.pizzaForm.vegetarian
      })
      
    })
    .then(resp => resp.json())
    .then(updatedPizza => {
      this.setState({
        pizzaList: this.state.pizzaList.map(pizza => pizza.id === updatedPizza.id ? updatedPizza : pizza)
      })
    }) 
  }

  editPizza = (pizza) => {
    this.setState({
      pizzaForm: pizza
    })
  }

  render() {

    
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza={this.state.pizzaForm} formTopping={this.formTopping} formSize={this.formSize} formVeg={this.formVeg} formSubmit={this.formSubmit}/>
        <PizzaList pizzas={this.state.pizzaList} editPizza={this.editPizza}/>
      </Fragment>
    );
  }
}

export default App;
