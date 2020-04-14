import React from "react"

const Pizza = (props) => {
  return(
    <tr>
      <td>{props.p.topping}</td>
      <td>{props.p.size}</td>
      <td>{props.p.vegetarian?"Yes":"No"}</td>
      <td><button onClick = {() => props.changeEdit(props.p)}  type="button" className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
