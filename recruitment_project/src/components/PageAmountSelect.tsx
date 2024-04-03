import React from "react";
import { Select, MenuItem } from '@mui/material';
import { useDispatch } from "react-redux";
import { setItemsOnPage } from "../slices/tagsSlice";

export interface PageAmountSelectProps {
  itemsOnPage: number
}

const PageAmountSelect = ({itemsOnPage}: PageAmountSelectProps) => {

  const dispatch = useDispatch();
 
  const handleChange = (event: any) => {
    dispatch(setItemsOnPage(event.target.value));
  };

  return (
    <Select
      value={itemsOnPage}
      onChange={handleChange}
      displayEmpty
      inputProps={{ 'aria-label': 'Ilość elementów na stronie' }}
    >
      {Array.from({ length: 10 }, (_, index) => 10 + index * 10).map((n) => (
        <MenuItem key={n} value={n}>{n}</MenuItem>
      ))}
    </Select>
  );
}

export default PageAmountSelect