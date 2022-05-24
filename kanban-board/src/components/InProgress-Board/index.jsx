import './style.css';
import {AiOutlinePlus} from 'react-icons/ai';
import GenerateNewCard from '../../shared-components/Generate-New-Card';
import Card from '../../shared-components/Card';


function InProgressBoard () {



    return (
        <main className='todo-main__container'>
            <header className='board-header__container'>
                <section className='section__container'>
                    <div className='qty-cards'>1</div>
                    <p className='board-title'>In Progress</p>
                </section>
                <AiOutlinePlus className='add-card__button'></AiOutlinePlus>
            </header>
            <section>
                <GenerateNewCard></GenerateNewCard>
                <Card></Card>
            </section>
        </main>
    )
}


export default InProgressBoard;