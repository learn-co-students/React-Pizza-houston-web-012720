import React, { useState, useEffect } from "react"

const PizzaForm = (props) => {

  const [topping, setTopping] = useState(props.pizza.topping)
  const [size, setSize] = useState(props.pizza.size)
  const [vegetarian, setVegetarian] = useState(props.pizza.vegetarian)

  useEffect(() => {
    setTopping(props.pizza.topping)
    setSize(props.pizza.size)
    setVegetarian(props.pizza.vegetarian)
  })

  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text"
                   className="form-control"
                   placeholder="Pizza Topping"
                   value={topping}
                   onChange={e => props.editPizza(e.target)}
            />
        </div>
        <div className="col">
          <select value={props.pizza.size} className="form-control"
                  onChange={e => setSize(e.target.value)}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" checked={props.pizza.vegetarian}
                   onChange={e => setVegetarian(true)}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" checked={!props.pizza.vegetarian}
                   onChange={e => setVegetarian(false)}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={() => props.handleSubmit({topping, size, vegetarian})}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
