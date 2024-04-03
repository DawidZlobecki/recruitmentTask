import React, { useEffect, useState } from 'react';
import './App.css';
import { TagItem, fetchTags } from './services/axios';
import PageAmountSelect from './components/PageAmountSelect';
import ItemsDisplayer from './components/ItemsDisplayer';
import SortBy from './components/SortBy';

function App() {
  const [tags, setTags] = useState<TagItem[]>([]);
  const [itemsOnPage, setItemsOnPage] = useState<number>(10);
  const [order, setOrder] = useState<'asc' | 'desc'>('desc');
  const [sortBy, setSortBy] = useState<'popular' | 'activity' | 'name'>('popular');
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    setIsLoading(true);
    fetchTags({itemsOnPage, order, sortBy})
      .then(data => {
        setTags(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Błąd pobierania danych:', error);
      });
  }, [itemsOnPage, order, sortBy]);

  return (
    <div className="App">
      <div className='DataContainer'>
        <div className='Row'>
          <div className='SortByContainer'>
            Ilość elementów na stronie:&ensp;
            <SortBy sortBy={sortBy} setSortBy={setSortBy} />
          </div>
          <div className='PageAmountContainer'>
            Ilość elementów na stronie:&ensp;
            <PageAmountSelect itemsOnPage={itemsOnPage} setItemsOnPage={setItemsOnPage}/>
          </div>
        </div>
        <div className='ItemsDisplayerContainer'>
          <ItemsDisplayer isLoading={isLoading} order={order} setOrder={setOrder} items={tags} itemsOnPage={itemsOnPage} />
        </div>
      </div>
    </div>
  );
}

export default App;