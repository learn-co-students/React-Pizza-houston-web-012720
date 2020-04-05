import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {

  constructor(){
    super()
    this.state = {
      pizzas: [],
      editPizza: {}
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/pizzas")
    .then(resp => resp.json())
    .then(pizzaData => {
      this.setState({
        pizzas: pizzaData
      })
    })
  }

  handleEdit = (clickedPizza) => {
    this.setState({
      editPizza: clickedPizza
    })
  }

  handleChange = (event, field) => {
    // controlled form/component => single source of truth from react state
    let prevPizza = this.state.editPizza
    switch (field){
      case "topping":
        this.setState({
          editPizza: {...prevPizza, topping: event.target.value}
        })
        break
      case "size": 
        this.setState({
          editPizza: {...prevPizza, size: event.target.value}
        })
        break
      case "veg": 
        this.setState({
          editPizza: {...prevPizza, vegetarian: true}
        })
        break
      case "non-veg":
        this.setState({
          editPizza: {...prevPizza, vegetarian: false}
        })
    }
  }

  handleSubmit = () => {  
    let updatedPizza = this.state.editPizza 
    fetch(`http://localhost:3000/pizzas/${updatedPizza.id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(updatedPizza)
    })
    .then(resp => resp.json())
    .then(updatedPizza => {
      let pizzaList = this.state.pizzas
      let updatedPizzaList = pizzaList.map (pizza => (
        pizza.id === updatedPizza.id 
        ? updatedPizza 
        : pizza
      ))
      this.setState({ 
        pizzas: updatedPizzaList,
        editPizza: {} 
      })
    })
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza={this.state.editPizza} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <PizzaList pizzas={this.state.pizzas} handleEdit={this.handleEdit}/>
      </Fragment>
    );
  }
}

export default App;
