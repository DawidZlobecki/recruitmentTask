import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TagItem } from '../services/axios';

interface TagsState {
  tags: TagItem[];
  itemsOnPage: number;
  order: 'asc' | 'desc';
  sortBy: 'popular' | 'activity' | 'name';
  isLoading: boolean;
  pageNumber: number;
  hasNextPage: boolean
}

const initialState: TagsState = {
  tags: [],
  itemsOnPage: 40,
  order: 'desc',
  sortBy: 'popular',
  isLoading: true,
  pageNumber: 1,
  hasNextPage: false,
};

const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    setTags(state, action: PayloadAction<TagItem[]>) {
      state.tags = action.payload;
    },
    setItemsOnPage(state, action: PayloadAction<number>) {
      state.itemsOnPage = action.payload;
    },
    setOrder(state, action: PayloadAction<'asc' | 'desc'>) {
      state.order = action.payload;
    },
    setSortBy(state, action: PayloadAction<'popular' | 'activity' | 'name'>) {
      state.sortBy = action.payload;
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setPageNumber(state, action: PayloadAction<number>) {
      state.pageNumber = action.payload;
    },
    setHasNextPage(state, action: PayloadAction<boolean>) {
      state.hasNextPage = action.payload;
    },
  },
});

export const {
  setTags,
  setItemsOnPage,
  setOrder,
  setSortBy,
  setIsLoading,
  setPageNumber,
  setHasNextPage
} = tagsSlice.actions;

export default tagsSlice.reducer;
