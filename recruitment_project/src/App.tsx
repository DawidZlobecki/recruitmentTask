import React, { useEffect, useState } from 'react';
import './App.css';
import { TagItem, fetchTags } from './services/axios';
import PageAmountSelect from './components/PageAmountSelect';

function App() {
  const [tags, setTags] = useState<TagItem[]>([
    {
      name: 'string',
      count: 12
    }]);
    
  const [itemsOnPageNumber, setItemsOnPageNumber] = useState<number>(10);

  useEffect(() => {
    fetchTags({itemsOnPageNumber})
      .then(data => {
        console.log('DATAAA', data.length, data)
        setTags(data);
      })
      .catch(error => {
        console.error('Błąd pobierania danych:', error);
      });
  }, [itemsOnPageNumber]);

  return (
    <div className="App">
      <div className='DataContainer'>
        <div className='Row'>
          <div></div>
          <div className='PageAmountContainer'>
            Ilość elementów na stronie:&ensp;
            <PageAmountSelect itemsOnPageNumber={itemsOnPageNumber} setItemsOnPageNumber={setItemsOnPageNumber}/>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;