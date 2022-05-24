import './style.css';
import {ImBin2} from 'react-icons/im';
import {SiTarget} from 'react-icons/si';


function Card () {

    return (
        <main className='card__container'>
            <section className='card-section__container'>
                <div className='info__container'>
                    <SiTarget className='status'></SiTarget>
                    <p className='title'>creacion del CI/CD para el frontal</p>
                </div>
                <ImBin2 className='delete-button'></ImBin2>
            </section>
            <section className='details__container'>
                <p className='id'>#23</p>
                <p className='date'>created on 30/07/2021 8:34:54</p>
            </section>
        </main>
    )
}


export default Card;