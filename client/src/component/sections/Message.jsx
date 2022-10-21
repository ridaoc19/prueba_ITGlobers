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

      case "length":
        return validation = "No puede tener mas de 45 caracteres"

    case "onClick":
      return validation = "Para registrarse debe ingresar un correo valido"

    case "registered":
      return validation = <div>El correo electronico <u>{props.state.payload}</u> ya se encuentra registrado</div>

    case "success":
      return validation = <div>El correo electronico <u>{props.state.payload}</u> fue registrado correctamente</div>

    default:
      break;
  }

  return (
    <div>
      {validation}
    </div>
  );
}

export default Message;