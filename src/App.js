import React, { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState('');

  useEffect(() => {
    const data = localStorage.getItem('techs');
      if(data) {
        setTechs(JSON.parse(data));
      }
  }, [])

  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs));
  }, [techs])

  function handleAdd() {
    if(newTech !== '') {
      setTechs([...techs, newTech]);
      setNewTech('');
    }
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
