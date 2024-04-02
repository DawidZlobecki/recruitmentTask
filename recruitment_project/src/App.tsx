import React, { useEffect, useState } from 'react';
import './App.css';
import { fetchTags } from './services/axios';

function App() {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetchTags()
      .then(data => {
        console.log('DATAAAA', data);
        setTags(data);
      })
      .catch(error => {
        console.error('Błąd pobierania danych:', error);
      });
  }, []);

  return (
    <div className="App">
      {tags.map((item, index) => {
        return <div key={index}>asd</div>;
      })}
    </div>
  );
}

export default App;