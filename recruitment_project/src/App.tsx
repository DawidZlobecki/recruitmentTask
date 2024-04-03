import React, { useEffect } from 'react';
import './App.css';
import { TagItem, fetchTags } from './services/axios';
import PageAmountSelect from './components/PageAmountSelect';
import ItemsDisplayer from './components/ItemsDisplayer';
import SortBy from './components/SortBy';
import Pagination from './components/Pagination';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store, { RootState } from './store';
import { setTags, setIsLoading, setHasNextPage } from './slices/tagsSlice';

interface fetchTagsInterface {
  items: TagItem[];
  hasNextPage: boolean;
}

function App() {
  const dispatch = useDispatch();
  const itemsOnPage = useSelector((state: RootState) => state.tags.itemsOnPage);
  const order = useSelector((state: RootState) => state.tags.order);
  const sortBy = useSelector((state: RootState) => state.tags.sortBy);
  const pageNumber = useSelector((state: RootState) => state.tags.pageNumber);

  useEffect(() => {
    dispatch(setIsLoading(true));
    fetchTags({ itemsOnPage, order, sortBy, pageNumber}) 
      .then(({items, hasNextPage}: fetchTagsInterface) => {
        dispatch(setTags(items));
        dispatch(setHasNextPage(hasNextPage))
        dispatch(setIsLoading(false));
      })
      .catch(error => {
        console.error('Błąd pobierania danych:', error);
      });
  }, [itemsOnPage, order, sortBy, pageNumber, dispatch]);

  return (
      <div className="App">
        <div className='DataContainer'>
          <div>
            <div className='Row'>
              <div className='SortByContainer'>
                Sortuj po:&ensp;
                <SortBy />
              </div>
              <div className='PageAmountContainer'>
                Ilość elementów na stronie:&ensp;
                <PageAmountSelect />
              </div>
            </div>
            <div className='ItemsDisplayerContainer'>
              <ItemsDisplayer />
            </div>
          </div>
          <div className='PaginationContainer'>
            <Pagination />
          </div>
        </div>
      </div>
  );
}

export default App;