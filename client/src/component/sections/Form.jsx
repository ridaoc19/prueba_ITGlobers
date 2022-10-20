import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import style from "./sections.module.scss";
import image from '../../scss/images/images';
import { registration } from '../../redux/actions';
import Message from './Message';
import { useEffect } from 'react';



function Form(props) {
  const dispatch = useDispatch();

  const messageRegistro = useSelector(state => state.messageRegistro)

  const [input, setInput] = useState("")
  const [error, setError] = useState({type: "initial"})

  const validationEmail = (value) =>{
  return !/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,67}$/i.test(value)
  }  
  const handleOnChange = (e) => {

    validationEmail(e.target.value)?
      setError({type: "validation"}) : setError({type: "verified"});
    setInput(e.target.value);
  }

  const handleOnClick = (e) => {
    e.preventDefault();
    if(validationEmail(input)) return setError({type: "onClick"})
    dispatch(registration({ email: input }))
  }

  useEffect(() => {
    if(messageRegistro?.message){
      setError({type: "registered", payload: messageRegistro.message})
    }else if(messageRegistro?.email){
      setError({type: "success", payload: messageRegistro.email})
    }
  },[messageRegistro])

  return (
    <div>
      <div className={style.form_container}>
        <div className={style.form_title}>
          <h5>NEWSLETTER</h5>
          <h1>SUSCRIBITE</h1>
          <p>Y enterate de todas la novedades</p>
        </div>
        <div className={style.form_formulario}>
          <form>
            <div className={style.button}>
              <input type="email" placeholder='Ingresa tu email' value={input} onChange={handleOnChange} />
              <button onClick={(e) => handleOnClick(e)}>{image.arrow}</button>
            </div>
          </form>
              <Message state={error}/>
        </div>
      </div>
    </div>
  );
}

export default Form;