import React from 'react';
import './styles.css'

function RadioButton() {
    return (<>

    <br/>
<div className='buttonsContainer'>
    <input id='title' type='radio' name='orderBy'value='title'  />
    <label for='title'> Título</label>

    <input id='priority' type='radio' name='orderBy'value='priority'/>
    <label for='priority'> Prioridade</label>

    <input id='recent' type='radio' name='orderBy'value='recent'/>
    <label for='recent'> Recente</label>

</div>
    
    </>)
}

export default RadioButton;