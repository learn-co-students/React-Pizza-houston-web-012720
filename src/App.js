import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  constructor(){
    super()
    this.state = {
      pizzalist: [],
      pizza: {},
      topping:"",
      size:"",
      vegy:false,
      notvegy:false
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/pizzas')
    .then(res => res.json())
    .then(res => this.setState({
      pizzalist:res
    }))
  }

  editpizza = (pizza) =>{
    
   this.setState({
     pizza:pizza,
     topping: pizza.topping,
     size: pizza.size,
     vegy: pizza.vegetarian,
     notvegy: !pizza.vegetarian
   })

  }

  changetopping=(event)=>{
    this.setState({
      topping:event.target.value
    })
  }
  changesize=(event)=>{
    this.setState({
      size:event.target.value
    })
  }

  changevegy=(event)=>{
    this.setState({
      vegy:event.target.value
    })
  }
  changenotvegy=(event)=>{
    this.setState({
      notvegy:event.target.value
    })
  }




  editedpizza = (event) => {
     this.state.pizza.topping = this.state.topping
     this.state.pizza.size = this.state.size
     this.state.pizza.vegy = this.state.vegy
     this.state.pizza.notvegy = this.state.notvegy
    this.setState ({
      pizza:this.state.pizza
    })
    fetch("http://localhost:3000/pizzas",{
      method: "POST",
      headers:{},
      body:JSON.stringify(
        this.state.pizza
     )
    })
  }
  
  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza = {this.state.pizza} topping={this.state.topping} size={this.state.size} vegy={this.state.vegy} notvegy={this.state.notvegy} changetopping={this.changetopping} changesize={this.changesize} changevegy={this.changevegy} changenotvegy={this.changenotvegy} editedpizza={this.editedpizza} />
        <PizzaList pizzalist={this.state.pizzalist} editpizza={this.editpizza}/>
      </Fragment>
    );
  }
}

export default App;
