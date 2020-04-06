import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {

  constructor() {
    super()
    this.state  = {
      pizzas: [],
      currentPizza: {},
      editedPizza: {
        vegetarian: false,
        topping: "None",
        size: "Small"
      }
    }
  }

  fetchPizzas = () => {
    fetch("http://localhost:3000/pizzas")
      .then(res => res.json())
      .then(pizzas => {
        this.setState({pizzas: pizzas})
      })
  }

  handleEdit = (pizza) => {
    this.setState({currentPizza: pizza})
    console.log(this.state.currentPizza)
  }

  handleSubmit = (event) => {
    console.log(event)
  }

  editPizza = (attr) => {
    this.setState({
      
    })
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza={this.state.currentPizza} 
                   handleSubmit={(event) => this.handleSubmit(event)}
                   editPizza={(attr) => this.editPizza(attr)}/>
        <PizzaList pizzas={this.state.pizzas} handleEdit={(pizza) => this.handleEdit(pizza)}/>
      </Fragment>
    );
  }

  componentDidMount() {
    this.fetchPizzas()
  }

}

export default App;
