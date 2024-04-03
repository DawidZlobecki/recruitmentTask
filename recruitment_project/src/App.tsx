import React, { useEffect, useState } from 'react';
import './App.css';
import { TagItem, fetchTags } from './services/axios';
import PageAmountSelect from './components/PageAmountSelect';
import ItemsDisplayer from './components/ItemsDisplayer';
import SortBy from './components/SortBy';
import Pagination from './components/Pagination';

function App() {
  const [tags, setTags] = useState<TagItem[]>([]);
  const [itemsOnPage, setItemsOnPage] = useState<number>(10);
  const [order, setOrder] = useState<'asc' | 'desc'>('desc');
  const [sortBy, setSortBy] = useState<'popular' | 'activity' | 'name'>('popular');
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [pageNumber, setPageNumber] = useState<number>(1)

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
  }, [itemsOnPage, order, sortBy, pageNumber]);

  return (
    <div className="App">
      <div className='DataContainer'>
        <div>
          <div className='Row'>
            <div className='SortByContainer'>
              Sortuj po:&ensp;
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
        <div className='PaginationContainer'>
          <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} hasNextPage={true} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
}

export default App;