import React from 'react';
import './styles.css'

function RadioButton() {
    return (<>

<radioBtn>
    <br/>
    <span />
    Ordenar por:
    <br/>
<buttons>
    <input
      type='radio'
      name='orderBy'
      value='titulo'
      /> Título
      
      <input
      type='radio'
      name='orderBy'
      value='recente'
      /> Recente
      
      <input
      type='radio'
      name='orderBy'
      value='prioridade'
      /> Prioridade
</buttons>
</radioBtn>
    
    </>)
}

export default RadioButton;