import React from "react"

const PizzaForm = (props) => {
  // console.log(props.pizzaToEdit)
  return(
      <div className="form-row">
        <div className="col-5">
            <input onChange={(e)=>{props.changePizzaTopping(e.target.value)}}type="text" className="form-control" placeholder="Pizza Topping" value={
                //Pizza Topping Should Go Here
                props.pizzaToEdit.topping // doesn't need conditional rendering? returning undefined is fine
              }/>
        </div>
        <div className="col">
          <select onChange={(e)=>props.changePizzaSize(e.target.value)} value={props.pizzaToEdit.size} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input onChange={(e)=>{props.changePizzaVegetarian(e.target.value)}}className="form-check-input" type="radio" value="Vegetarian" checked={props.pizzaToEdit.vegetarian}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input onChange={(e)=>{props.changePizzaVegetarian(e.target.value)}}className="form-check-input" type="radio" value="Not Vegetarian" checked={!props.pizzaToEdit.vegetarian}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={()=>{props.pizzaToEdit.topping ? props.updatePizza() : alert('no')}}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
