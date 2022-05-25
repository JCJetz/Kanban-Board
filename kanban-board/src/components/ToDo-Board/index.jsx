import './style.css';
import {AiOutlinePlus} from 'react-icons/ai';
import GenerateNewCard from '../../shared-components/Generate-New-Card';
import Card from '../../shared-components/Card';

const ToDoBoard = ({board,deleteCard}) => {

    return (
        <main className='todo-main__container'>
            <header className='board-header__container'>
                <section className='section__container'>
                    <div className='qty-cards'>{board.cards?.length}</div>
                    <p className='board-title'>{board.title}</p>
                </section>
                <AiOutlinePlus className='add-card__button'></AiOutlinePlus>
            </header>
            <section>
                <GenerateNewCard></GenerateNewCard>
                {/*map del board recibido como prop*/}
                {board.cards.map((item, index) => ( 
                    /* componente card recibe objecto con la card, id del board al que pertenece 
                    y función de borrado */
                    <Card key={index} boardid={board.id} card={item} deleteCard={deleteCard}></Card>
                ))}
            </section>
        </main>
    )
}


export default ToDoBoard;