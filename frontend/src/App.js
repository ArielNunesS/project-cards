import React, { useState, useEffect } from 'react';
import api from './services/api';

import './app.css'
import './main.css'
import './global.css'
import './sidebar.css'

import Notes from './Components/Notes';
import RadioButton from './Components/RadioButton';

function App() {

  const [ title, setTitle ] = useState('');
  const [ notes, setNotes ] = useState('');
  const [ allNotes, setAllNotes ] = useState([]);

  useEffect(() => {
    async function getAllNotes() {
      const response = await api.get('/cards',)

      setAllNotes(response.data)

    }

    getAllNotes();

  }, [])

  useEffect(() => {
  function enableSubmit() {
    let btn = document.getElementById('btn-submit')
      btn.style.cursor = "not-allowed"
      btn.style.background = "#7b6daf"
    if(title && notes){
      btn.style.background = "#1b085e"
      btn.style.cursor = "pointer"
      }
    }
    enableSubmit()
  }, [title, notes])

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post('/cards', {
      title,
      notes,
      priority: false
    })

    setTitle('')  
    setNotes('')

    setAllNotes([...allNotes, response.data])
  }

  return (  
<div id='app'>

    <aside>
      <strong>Caderno de Notas</strong>
      <form onSubmit={handleSubmit}>

    <div className='input-block'>
      <label htmlFor='title'>Título da Anotação</label>
      <input
        required
        maxLength={23}
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      
    </div>

    <div className='input-block'>
      <label htmlFor='nota'>Anotação</label>
      <textarea
        required
        value={notes}
        onChange={e => setNotes(e.target.value)}
      />

    </div>

      <button type='submit' id='btn-submit'>Salvar</button>
      </form>
    <RadioButton></RadioButton>
    </aside>

  <main>

    <ul>
      {allNotes.map(data => (
      <Notes data={data} />
      ))}
    </ul>

  </main>
</div>

  );
}

export default App;
