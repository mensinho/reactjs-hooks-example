import React, { useState } from 'react';
import './index.css';

function App() {
  const [techs, setTechs] = useState(['ReactJS', 'React Native', 'NodeJS']);
  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    setTechs([...techs, newTech]);
    setNewTech('');
  };

  return (
    <div className="App">
      <>
      <ul>
        {
          techs.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))
        }
      </ul>
      <input type="text" placeholder="Digite uma tecnologia" value={newTech} onChange={e => setNewTech(e.target.value)} />
      <button type="button" onClick={handleAdd}>Adicionar</button>
      </>
    </div>
  );
};

export default App;
