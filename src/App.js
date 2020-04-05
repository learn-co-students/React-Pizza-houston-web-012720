import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  constructor(){
    super()
    this.state = {
      pizzas: [],
      needEditPizza: {
        topping: "",
        size: "Small",
        vegetarian: false
      }
    }
  }

  componentDidMount(){
    fetch(" http://localhost:3000/pizzas")
    .then(res => res.json())
    .then(pizzas => this.setState({pizzas}))
  }

  editPizza = (pizza) => {
    this.setState({
      needEditPizza: pizza
    })
  }

  updatePizza = (editPizza) => {
    let pizzas = this.state.pizzas
    let index = pizzas.indexOf(this.state.needEditPizza)
    let obj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editPizza)
    }
    fetch(`http://localhost:3000/pizzas/${editPizza.id}`,obj)
    .then(res => res.json())
    .then(updatePizza => {
      pizzas.splice(index,1,updatePizza)
      this.setState({pizzas})
    })
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm needEditPizza = {this.state.needEditPizza} updatePizza = {this.updatePizza}/>
        <PizzaList pizzas = {this.state.pizzas} editPizza = {this.editPizza}/>
      </Fragment>
    );
  }
}

export default App;
