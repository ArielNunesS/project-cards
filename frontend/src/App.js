import React from 'react';
import './app.css'
import './main.css'
import './global.css'
import './sidebar.css'

function App() {
  return (
    <div id='app'>

    <aside>
      <strong>Caderno de Notas</strong>
      <form>

    <div className='input-block'>
      <label htmlFor='title'>Título da Anotação</label>
      <input />
    </div>

    <div className='input-block'>
      <label htmlFor='nota'>Anotação</label>
      <textarea></textarea>
    </div>

      <button type='submit'>Salvar</button>
      </form>
    </aside>

    <main>

    <ul>
      <li className='notepad-info'>
        <div>
          <strong>Fazer Compras</strong>
          <div>
            x
          </div>
        </div>

        <textarea>ASDASDASLKDJLKASJLKASDLKJ</textarea>
      </li>
      <li>askdskad</li>
    </ul>

    </main>
  </div>
  );
}

export default App;
