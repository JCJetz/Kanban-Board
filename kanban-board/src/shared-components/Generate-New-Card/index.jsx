import './style.css';


function GenerateNewCard () {


    return (
        <section className='new-note__container'>
            <textarea className='text-area' name="create-note" id="note" cols="60" rows="3" placeholder='Enter a note'></textarea>
            <div className='new-note-buttons__container'>
                <button className='button add__button'>Add</button>
                <button className='button cancel__button'>Cancel</button>
            </div>
        </section>
    )
}


export default GenerateNewCard;