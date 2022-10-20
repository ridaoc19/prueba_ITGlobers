import React from 'react';

function Message(props) {

  let validation = ""

  switch (props.state.type) {
    case "initial":
      return validation = ""

    case "validation":
      return validation = "Debe ingresar un correo electronico valido"

    case "verified":
      return validation = ""

    case "onClick":
      return validation = "Para registrarse debe ingresar un correo valido"


    case "registered":
      return validation = props.state.payload

    case "success":
      return validation = `El correo electronico ${props.state.payload} fue registrado correctamente`

    default:
      break;
  }

  return (
    <div>
      <h5>{validation}</h5>
    </div>
  );
}

export default Message;