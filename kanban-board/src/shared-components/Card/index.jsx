import './style.css';
import {ImBin2} from 'react-icons/im';
import {SiTarget} from 'react-icons/si';


const Card = ({boardid, card, deleteCard}) => {    

    return (
        <main className='card__container'>
            <section className='card-section__container'>
                <div className='info__container'>
                    <SiTarget className={`status ${card.status}`}></SiTarget>
                    <p className='title'>{card?.title}</p>
                </div>  
                {/* onClick con arrow func o no funciona bien */}
                <ImBin2 className='delete-button' onClick={() => deleteCard(boardid,card?.id)}></ImBin2>
            </section>
            <section className='details__container'>
                <p className='id'>#{card?.id}</p>
                <p className='date'>Created at {card?.created_at}</p>
            </section>
        </main>
    )
}


export default Card;