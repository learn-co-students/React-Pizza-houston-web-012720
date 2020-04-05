import React , {Component} from "react"

class PizzaForm extends Component{
  constructor(){
    super()
    this.state = {
      editPizza: {}
    }
  }
  
  componentDidUpdate(prevProps,prevState){
    if(prevProps !== this.props){
      this.setState({
        editPizza: this.props.needEditPizza
      })
    }
  }

  render(){
    let pizza = this.state.editPizza
    return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" value={pizza.topping} onChange={(e) => this.setState({editPizza: {...this.state.editPizza, topping: e.target.value}})}/>
        </div>
        <div className="col">
          <select value={pizza.size} className="form-control" onChange={(e) => this.setState({editPizza: {...this.state.editPizza, size: e.target.value}})}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" checked={pizza.vegetarian} onChange={() => this.setState({editPizza: {...this.state.editPizza, vegetarian: true}})}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" checked={!pizza.vegetarian} onChange={() => this.setState({editPizza: {...this.state.editPizza, vegetarian: false}})}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={() => this.props.updatePizza(this.state.editPizza)}>Submit</button>
        </div>
      </div>
  )
  }
}

export default PizzaForm