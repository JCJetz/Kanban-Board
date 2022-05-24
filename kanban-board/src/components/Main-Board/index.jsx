import './style.css';
import DoneBoard from '../Done-Board';
import InProgressBoard from '../InProgress-Board';
import ToDoBoard from '../ToDo-Board';

function MainBoard () {


    return (
        <main className='main-board__container'>
            <section className='version-filter__container'>
                <div className='version-update__container'>
                    <p className='version'>Version 1.0</p>
                    <p className='last-update'>Updated on 23 May</p>
                </div>
                <input className='filter-input' type="text" placeholder='Filter Cards'/>
            </section>
            <section className='card-boards__container'>
                <ToDoBoard></ToDoBoard>
                <InProgressBoard></InProgressBoard>
                <DoneBoard></DoneBoard>
            </section>
        </main>
    )
}


export default MainBoard;