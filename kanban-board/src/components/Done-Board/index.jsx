import './style.css';
import {AiOutlinePlus} from 'react-icons/ai';
import GenerateNewCard from '../../shared-components/Generate-New-Card';
import Card from '../../shared-components/Card';

const DoneBoard = ({board,deleteCard}) => {

    return (
        <main className='todo-main__container'>
            <header className='board-header__container'>
                <section className='section__container'>
                    <div className='qty-cards'>3</div>
                    <p className='board-title'>Done</p>
                </section>
                <section className='clear__container'>
                    <AiOutlinePlus className='add-card__button'></AiOutlinePlus>
                    <div className='clear-all__button'>Clear All</div>
                </section>
            </header>
            <section>
                <GenerateNewCard></GenerateNewCard>
                {board.cards.map((item, index) => ( 
                    <Card key={index} boardid={board.id} card={item} deleteCard={deleteCard}></Card>
                ))}
            </section>
        </main>
    )
}


export default DoneBoard;