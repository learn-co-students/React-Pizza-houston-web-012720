import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  constructor() {
    super()
    this.state = {
      pizzas: [],
      edit: {
        topping: null,
        size: "Small",
        vegetarian: true
      }
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/pizzas")
    .then(res => res.json())
    .then(data => this.setState({
      pizzas: data
    }) )
  }

  changeEdit = (edit) => this.setState({edit})

  changeForm = (key, value) => {
    let edit = this.state.edit
    edit[key] = value
    this.setState ({edit})
  }

  submitForm = () => {
    let params = {
      method: "POST",
      header: {"Content-Type": "aplication/json"},
      body: JSON.stringify(this.state.edit)
    }
    fetch("http://localhost:3000/pizzas", params)
    .then(res => res.json())
    .then(this.setState({edit: {topping: null,size: "Small",vegetarian: true}}))
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza = {this.state.edit} changeForm = {this.changeForm} submitForm = {this.submitForm}/>
        <PizzaList pizzas = {this.state.pizzas} changeEdit = {this.changeEdit}/>
      </Fragment>
    );
  }
}

export default App;
