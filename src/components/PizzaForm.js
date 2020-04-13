import React from "react"

const PizzaForm = (props) => {
  return (
    <div className="form-row">
      <div className="col-5" >
        <input type="text" className="form-control" placeholder="Pizza Topping" value={props.pizzaToEdit ? props.pizzaToEdit.topping : null} onChange={(e) => props.updateEditPizzaTopping(e.target.value)} />
      </div>
      <div className="col">
        <select value={null} className="form-control" onChange={(e) => props.updateEditPizzaSize(e.target.value)}>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>
      <div className="col" onChange={(e) => props.updateEditPizzaVegetarian(e.target.value === "Vegetarian" ? true : false)}>
        <div className="form-check">
          <input name="veg?" className="form-check-input" type="radio" value="Vegetarian" checked={null} />
          <label className="form-check-label">
            Vegetarian
            </label>
        </div>
        <div className="form-check">
          <input name="veg?" className="form-check-input" type="radio" value="Not Vegetarian" checked={null} />
          <label className="form-check-label">
            Not Vegetarian
            </label>
        </div>
      </div>
      <div className="col">
        <button type="submit" className="btn btn-success" onClick={props.editPizza}>Submit</button>
      </div>
    </div >

  )
}

export default PizzaForm
