import React from "react"

const PizzaForm = (props) => {
  return(

      <div className="form-row">
        <div className="col-5">
            <input onChange={(event)=>props.changetopping(event)}  type="text" className="form-control" placeholder="Pizza Topping" value={
                props.topping
              }/>
        </div>
        <div className="col">
          <select onChange={(event)=>props.changesize(event)}value={props.size} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input onChange={(event)=>props.changevegy(event)} className="form-check-input" type="radio" value="Vegetarian" checked={props.vegy}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input onChange={(event)=>props.changenotvegy(event)} className="form-check-input" type="radio" value="Not Vegetarian" checked={props.notvegy}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={(e)=>props.editedpizza(e)}>Submit</button>
        </div>
      </div>


  )
}

export default PizzaForm
