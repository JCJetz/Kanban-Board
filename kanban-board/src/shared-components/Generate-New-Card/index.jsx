import React, { useState, useRef , useEffect} from 'react';
import './style.css';


const GenerateNewCard = ({boardid,nextcardid,addCard}) => {

    // status según index del board (0/1 pending, 2 done)
    let status = boardid > 1 ? "Done" : "Pending"
    // crea fecha de creación en formato dia/mes/año,hora
    let createdat = `${new Date().toLocaleDateString()}, ${new Date().toLocaleTimeString()}`

    
    const [text, setText] = useState('')
    //de momento siempre está open
    const [open, setOpen] = useState(true)
    const [buttonstate, setButtonState] =  useState('disabled')
    const box = useRef()
    //const textareaEl = useRef()

    // cuando input tenga algún caracter escrito, quitar clase disabled del botón de envío
    const handleChange = e => {
        //textareaEl.current.style.height = 'inherit'
        //textareaEl.current.style.height = `${e.target.scrollHeight}px`
        setText(e.target.value)
        text.length > 0 ? setButtonState("") : setButtonState("disabled")
    }
    

    const handleClose = () => {
        setText('')
        //setOpen(false)
    }

    // función intermedia para el preventdefault (sino la página recarga)
    const enviarCard = e => {
        e.preventDefault()
        if (!text.trim()) {
          return
        }
        console.log(status)
        // llamo funcion de añadir card con sus parametros y vacio el input
        addCard(boardid,nextcardid,text,status,createdat)
        setText('')
        // cerrar tras submit, desactivado hasta que funcione botón de abrir de nuevo
        //setOpen(false)
    }

    

    return (

        <section className="new-note__container" ref={box}>
            {/* muestra form o no dependiendo de si setOpen está en 'open' */}
            {open ? (
                    <form className="new-note__form" action="" onSubmit={enviarCard}>
                        <textarea
                            //ref={textareaEl}
                            className="text-area"
                            name="title"
                            id="note"
                            value={text}
                            cols="60" rows="3"
                           /* handle para que no se active el botón hasta que haya texto */
                            onChange={handleChange}
                            placeholder="Enter a New Task"
                            required
                        />
                        <div className="new-note-buttons__container">
                            <button className={`button add__button ${buttonstate}`} type="submit">
                            Add
                            </button>
                            <button className="button cancel__button" onClick={handleClose}>Cancel
                            </button>
                        </div>
                    </form>
            ):('')}
        </section>
    )
}

export default GenerateNewCard;