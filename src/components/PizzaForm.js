import React from "react"

const PizzaForm = (props) => {
  const pizza = props.pizza
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" onChange={(e)=> props.formTopping(e.target.value)}className="form-control" placeholder="Pizza Topping" value={
                props.pizza.topping
              }/>
        </div>
        <div className="col">
          <select onChange={(e)=> props.formSize(e.target.value)}value={props.pizza.size} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div onChange={(e)=> props.formVeg(e.target.value)}className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" checked={null} name="Veg"/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" checked={null} name="Veg"/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={()=>props.formSubmit(pizza)}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
