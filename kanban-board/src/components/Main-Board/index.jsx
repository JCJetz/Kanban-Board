import React, { useState } from 'react';
import './style.css';
//import DoneBoard from '../Done-Board';
//import InProgressBoard from '../InProgress-Board';
//import ToDoBoard from '../ToDo-Board';
import BoardContainer from '../BoardContainer';

function MainBoard () {


    // useState para las cards, y estado inicial
    const [cards, setCards] = useState([
        {
            title: "To Do",
            id: 0,
            cards: [
              { id: 0, title: "iconos se hacen pequeños si el texto es muy largo", status: "pending", created_at: `${new Date().toLocaleDateString()}, ${new Date().toLocaleTimeString()}`},
            ]
        },
        {
            title: "In Progress",
            id: 1,
            cards: [
              { id: 2, title: "función de búsqueda", status: "pending", created_at: `${new Date().toLocaleDateString()}, ${new Date().toLocaleTimeString()}`},
              { id: 1, title: "desactivación con input vacío/activación y colores del botón 'Add' (funciona a medias, se activa pero no se vuelve a desactivar)", status: "pending", created_at: "25/05/2022 1:31:16" },
              { id: 0, title: "función de abrir/cerrar input textbox", status: "pending", created_at: "25/05/2022 2:13:42" }
            ]
          },
          {
            title: "Done",
            id: 2,
            cards: [
              { id: 4, title: "colores todo/inprogress/done", status: "done", created_at: "25/05/2022 1:31:16" },
              { id: 3, title: "función de creación", status: "done", created_at: "25/05/2022 1:08:21" },
              { id: 2, title: "función de borrado", status: "done", created_at: "25/05/2022 0:34:54" },
              { id: 1, title: "usestate para las cards y estado inicial", status: "done", created_at: "30/07/2021 8:34:54" },
              { id: 0, title: "creacion del CI/CD para el frontal", status: "done", created_at: "30/07/2021 8:34:54" }
            ]
          }
    ])

    // usestate de la búsqueda
    const [searchterm, isSearched] = useState('')

    // funcion intermedia para crear nueva card (devuelve mismo objeto)
    function createCard(cardid,title,status,created_at) {
        return {id: cardid, title: title, status: status, created_at: created_at};
      }
    
    // funcion crear nueva card
    const addCard = (boardid,cardid,title,status,created_at) => { 
        //copia de cards sino no me funcionaba       
        let workingcards = JSON.parse(JSON.stringify(cards))
        //pusheo al nuevo objeto con el id del booard y los params obtenidos desde el input,
        // usando función anterior
        workingcards[boardid].cards.push(createCard(cardid,title,status,created_at));
        // actualiza state de las cards con la nuueva incluída
        setCards(workingcards);
      }

    //Función icono borrar card, recibe id de la card a borrar del board que corresponde
    const deleteCard = (boardid,cardid) => {
        // alerta para confirmar borrado
        if (window.confirm("Delete this note?")) {
          //objeto copia de las cards del que borrar, sino no me funcionaba :/
          var workingcards = JSON.parse(JSON.stringify(cards))
          //elimina 1 card del board 'boardid', en posición 'cardid'
          workingcards[boardid].cards.splice(cardid, 1);
          //fija nuevo state con el nuevo objeto sin la card borrada
          setCards(workingcards);
        }
    }

    const [filtered_cards,filterCards] = useState([])

    /*  prueba que no funciona todavía 

    function getCardsbyFilter(board,filter) {
        return Object.fromEntries(
          Object.entries(board.cards).filter(c => c.title.toLowerCase().includes(val))
        );
    }
    */
      
    // No funciona
    const filterByTitle = e => {

        const val = e.target.value.toLowerCase(); // valor del input
        console.log(cards)
        if (val.length > 2) {
            console.log(cards)
            //cards.forEach(board => getCardsbyFilter(board,val))
            let filteredArray = cards.filter(c => c.title.toLowerCase().includes(val));
            console.log(filteredArray)
            filterCards(filteredArray);
            isSearched(val);
            console.log(searchterm)
        }
        
        
    }

    return (
        <main className='main-board__container'>
            <section className='version-filter__container'>
                <div className='version-update__container'>
                    <p className='version'>Version 1.1</p>
                    <p className='last-update'>Updated on 25 May</p>
                </div>
                <input onChange={filterByTitle} className='filter-input' type="search" placeholder="Filter Cards"></input>
            </section>
            <section className='card-boards__container'>
            {/* map a diferente objeto dependiendo de si ha habido búsqueda o no :/ */}
            {searchterm.length > 2 ? (
                filtered_cards.map((item, index) => ( 
                    /* componente BoardsContainer recibe objecto con las cards del board, id del board 
                    y función de añadido/borrado de card*/
                    <BoardContainer key={index} board={item} addCard={addCard} deleteCard={deleteCard}></BoardContainer>
                ))
            ):(cards.map((item, index) => ( 
                <BoardContainer key={index} board={item} addCard={addCard} deleteCard={deleteCard}></BoardContainer>
                )))}
                
                {//<ToDoBoard board={cards[0]} deleteCard={deleteCard}></ToDoBoard>
                //<InProgressBoard board={cards[1]} deleteCard={deleteCard}></InProgressBoard>
                //<DoneBoard board={cards[2]} deleteCard={deleteCard}></DoneBoard>
                }
            </section>
        </main>
    )
}


export default MainBoard;