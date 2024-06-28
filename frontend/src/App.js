import React, { useState } from 'react';

import './app.css'
import './main.css'
import './global.css'
import './sidebar.css'

import Notes from './Components/Notes';

function App() {
  const [ title, setTtile ] = useState('');
  const [ notes, setNotes ] = useState('');

  return (  
<div id='app'>

    <aside>
      <strong>Caderno de Notas</strong>
      <form>

    <div className='input-block'>
      <label htmlFor='title'>Título da Anotação</label>
      <input
        required
        value={title}
      />
      
    </div>

    <div className='input-block'>
      <label htmlFor='nota'>Anotação</label>
      <textarea
      required
      value={notes}
      
      />

    </div>

      <button type='submit'>Salvar</button>
      </form>
    </aside>

  <main>

    <ul>
      <Notes />
    </ul>

  </main>
</div>

  );
}

export default App;
