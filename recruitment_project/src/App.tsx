import React, { useEffect, useState } from 'react';
import './App.css';
import { TagItem, fetchTags } from './services/axios';
import PageAmountSelect from './components/PageAmountSelect';
import ItemsDisplayer from './components/ItemsDisplayer';

function App() {
  const [tags, setTags] = useState<TagItem[]>([]);
  const [itemsOnPage, setItemsOnPage] = useState<number>(10);
  const [order, setOrder] = useState<'asc' | 'desc'>('desc')

  useEffect(() => {
    fetchTags({itemsOnPage, order})
      .then(data => {
        console.log('DATAAA', data.length, data)
        setTags(data);
      })
      .catch(error => {
        console.error('Błąd pobierania danych:', error);
      });
  }, [itemsOnPage, order]);

  return (
    <div className="App">
      <div className='DataContainer'>
        <div className='Row'>
          <div></div>
          <div className='PageAmountContainer'>
            Ilość elementów na stronie:&ensp;
            <PageAmountSelect itemsOnPage={itemsOnPage} setItemsOnPage={setItemsOnPage}/>
          </div>
        </div>
        <div className='ItemsDisplayerContainer'>
          <ItemsDisplayer order={order} setOrder={setOrder} items={tags} itemsOnPage={itemsOnPage} />
        </div>
      </div>
    </div>
  );
}

export default App;