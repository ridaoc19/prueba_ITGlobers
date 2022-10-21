import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import style from "./sections.module.scss";
import image from '../../scss/images/images';
import { registration } from '../../redux/actions';
import Message from './Message';

function Form(props) {
  const dispatch = useDispatch();

  const messageRegistro = useSelector(state => state.messageRegistro);
  const loading = useSelector(state => state.loading);

  const [input, setInput] = useState("")
  const [error, setError] = useState({ type: "initial", css: "" })

  const validationEmail = (value) => {
    return !/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,67}$/i.test(value)
  }
  const handleOnChange = (e) => {
    if (e.target.value === "") {
      setError({ type: "initial", css: "" })
    } else if (validationEmail(e.target.value)) {
      setError({ type: "validation", css: "alert" })
    } else if (e.target.value.length >= 45) {
      setError({ type: "length", css: "alert" })
    } else {
      setError({ type: "verified", css: "" })
    }
    setInput(e.target.value);
  }

  const handleOnClick = (e) => {
    e.preventDefault();
    if (validationEmail(input)) return setError({ type: "onClick", css: "alert" })
    dispatch(registration({ email: input }))
  }

  useEffect(() => {
    if (messageRegistro?.message) {
      setError({ type: "registered", payload: messageRegistro.message, css: "alert" })
    } else if (messageRegistro?.email) {
      setError({ type: "success", payload: messageRegistro.email, css: "success" })
      setInput("")
    }
    setTimeout(() => {
      setError({ type: "initial" })
    }, 5000);
  }, [messageRegistro])

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
          {loading ? <div className={style.scanner}><h1>Cargando...</h1></div> : <h4 className={style[`form_${error.css}`]}><Message state={error} /></h4>}
        </div>
      </div>
    </div>
  );
}

export default Form;