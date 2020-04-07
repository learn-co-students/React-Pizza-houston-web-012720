import React from "react"

export default class PizzaForm extends React.Component {


  formChange = (e) => {
    if (e.target.id === "vegetarian"){
      this.props.changeForm("vegetarian", true)
    }
    if (e.target.id === "non-vegetarian"){
      this.props.changeForm("vegetarian", false)
    }
    else{
      this.props.changeForm(e.target.id, e.target.value)
    }
  }


  render(){
    return(
        <div className="form-row">
          <div className="col-5">
              <input id="topping" onChange={this.formChange} type="text" className="form-control" placeholder="Pizza Topping" value={
                  !!this.props.pizza?this.props.pizza.topping:""
                }/>
          </div>
          <div className="col">
            <select id="size" onChange={this.formChange} value={!!this.props.pizza?this.props.pizza.size:"Small"} className="form-control">
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
          <div className="col">
            <div className="form-check">
              <input id = "vegetarian" onChange={this.formChange} className="form-check-input" type="radio" value="Vegetarian" checked={!!this.props.pizza?this.props.pizza.vegetarian:true}/>
              <label className="form-check-label">
                Vegetarian
              </label>
            </div>
            <div className="form-check">
              <input id = "non-vegetarian" onChange={this.formChange} className="form-check-input" type="radio" value="Not Vegetarian" checked={!!this.props.pizza?!this.props.pizza.vegetarian:null}/>
              <label className="form-check-label">
                Not Vegetarian
              </label>
            </div>
          </div>
          <div className="col">
            <button type="submit" onClick = {this.props.submitForm} className="btn btn-success">Submit</button>
          </div>
        </div>
    )
  }
}


